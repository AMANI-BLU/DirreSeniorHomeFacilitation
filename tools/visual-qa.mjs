import fs from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/AMAN/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/.pnpm/playwright@1.60.0/node_modules/playwright");

const root = "D:/DireSeniorHome";
const outputDir = path.join(root, "screenshots");
await fs.mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
});
const results = [];

async function checkViewport(pageFile, name, width, height) {
  const page = await browser.newPage({ viewport: { width, height } });
  const messages = [];
  page.on("console", (message) => {
    if (message.type() === "error") messages.push(message.text());
  });
  page.on("pageerror", (error) => messages.push(error.message));

  await page.goto(`file:///${root}/${pageFile}`);
  await page.waitForLoadState("load");
  await page.waitForTimeout(800);
  const screenshotName = `${pageFile.replace(".html", "")}-${name}.png`;
  await page.screenshot({ path: path.join(outputDir, screenshotName), fullPage: true });

  const metrics = await page.evaluate(() => {
    const images = [...document.images].map((image) => ({
      src: image.getAttribute("src"),
      complete: image.complete,
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight,
    }));
    return {
      title: document.title,
      imageCount: images.length,
      brokenImages: images.filter((image) => !image.complete || !image.naturalWidth || !image.naturalHeight),
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      bodyText: document.body.innerText.slice(0, 240),
    };
  });

  results.push({
    page: pageFile,
    viewport: name,
    width,
    height,
    screenshot: `screenshots/${screenshotName}`,
    consoleErrors: messages,
    ...metrics,
    hasHorizontalOverflow: metrics.scrollWidth > metrics.clientWidth + 1,
  });

  await page.close();
}

const pages = ["index.html", "about.html", "founder.html", "care-center.html", "gallery.html", "support.html"];

for (const pageFile of pages) {
  await checkViewport(pageFile, "desktop", 1440, 1100);
  await checkViewport(pageFile, "mobile", 390, 900);
}

const interactionPage = await browser.newPage({ viewport: { width: 390, height: 900 } });
await interactionPage.goto(`file:///${root}/index.html`);
await interactionPage.waitForLoadState("load");
await interactionPage.getByRole("button", { name: "Open navigation" }).click();
const navOpen = await interactionPage.locator("[data-nav]").evaluate((element) => element.classList.contains("is-open"));
await interactionPage.getByRole("button", { name: "Project Entrance" }).click();
const lightboxOpen = await interactionPage.locator("[data-lightbox]").evaluate((element) => !element.hidden);
await interactionPage.getByRole("button", { name: "Close image" }).click();
const lightboxClosed = await interactionPage.locator("[data-lightbox]").evaluate((element) => element.hidden);
await interactionPage.goto(`file:///${root}/gallery.html`);
await interactionPage.waitForLoadState("load");
await interactionPage.getByRole("button", { name: "Project Entrance" }).click();
const galleryLightboxOpen = await interactionPage.locator("[data-lightbox]").evaluate((element) => !element.hidden);
await interactionPage.close();

await browser.close();

console.log(
  JSON.stringify(
    {
      results,
      interactions: {
        navOpen,
        lightboxOpen,
        lightboxClosed,
        galleryLightboxOpen,
      },
    },
    null,
    2,
  ),
);
