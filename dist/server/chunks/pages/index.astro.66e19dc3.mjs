/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, d as renderHead, e as addAttribute } from '../astro.6812e4ec.mjs';
import 'html-escaper';
import 'path-to-regexp';
import 'cookie';
import 'kleur/colors';
import 'fs';
import 'http';
import 'tls';
import 'mime';
import 'string-width';
import 'slash';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html lang="en" style="background:#070709">\n  <head>\n    <meta charset="utf-8">\n    <link rel="icon" type="image/svg+xml" href="/favicon.svg">\n    <meta name="viewport" content="width=device-width">\n    <meta name="generator"', ">\n    <title>aCard</title>\n  ", '</head>\n  <body class="font-sans dark:text-white dark:bg-hex-121212">\n    <div class="flex flex-col">\n      ', '\n    </div>\n  <script src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js"><\/script>\n  <script>\n    // VConsole \u9ED8\u8BA4\u4F1A\u6302\u8F7D\u5230 `window.VConsole` \u4E0A\n    var vConsole = new window.VConsole();\n  <\/script>\n</body></html>'], ['<html lang="en" style="background:#070709">\n  <head>\n    <meta charset="utf-8">\n    <link rel="icon" type="image/svg+xml" href="/favicon.svg">\n    <meta name="viewport" content="width=device-width">\n    <meta name="generator"', ">\n    <title>aCard</title>\n  ", '</head>\n  <body class="font-sans dark:text-white dark:bg-hex-121212">\n    <div class="flex flex-col">\n      ', '\n    </div>\n  <script src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js"><\/script>\n  <script>\n    // VConsole \u9ED8\u8BA4\u4F1A\u6302\u8F7D\u5230 \\`window.VConsole\\` \u4E0A\n    var vConsole = new window.VConsole();\n  <\/script>\n</body></html>'])), addAttribute(Astro2.generator, "content"), renderHead($$result), renderComponent($$result, "Card", null, { "containerClass": "card", "client:only": "vue", "client:component-hydration": "only", "client:component-path": "C:/Users/tongyf/Desktop/lastro/fast-fusion/src/components/card.vue", "client:component-export": "default" }));
}, "C:/Users/tongyf/Desktop/lastro/fast-fusion/src/pages/index.astro");

const $$file = "C:/Users/tongyf/Desktop/lastro/fast-fusion/src/pages/index.astro";
const $$url = "/btmario";

export { $$Index as default, $$file as file, $$url as url };
