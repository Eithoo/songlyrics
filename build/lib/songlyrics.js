"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.songlyrics = void 0;
const lib_1 = require("../lib");
const node_html_parser_1 = __importDefault(require("node-html-parser"));
const sources_1 = require("../sources");
const cleanTitleRegexp = /\s(-.+|\[.+\]|\(.+\))/g;
const cleanTitle = (title) => title.replace(cleanTitleRegexp, '').trim();
const songlyrics = (title) => __awaiter(void 0, void 0, void 0, function* () {
    const clean = cleanTitle(title).toLowerCase();
    const query = `${clean} inurl:lyrics`;
    const ddgResults = yield (0, lib_1.webSearch)(query);
    const ddgResult = ddgResults === null || ddgResults === void 0 ? void 0 : ddgResults.shift();
    const sourceName = ddgResult === null || ddgResult === void 0 ? void 0 : ddgResult.i.replace(/(www.|.com)/g, '').toLowerCase();
    const sources = (0, sources_1.makeSources)();
    if (ddgResult && sourceName && sources.has(sourceName)) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const source = sources.get(sourceName);
        const html = yield (0, lib_1.makeRequest)(new URL(ddgResult.c));
        const lyrics = yield source.parse((0, node_html_parser_1.default)(html));
        return {
            title: ddgResult.t.replace(/\|.+/g, '').trim(),
            lyrics,
            source: {
                name: source.name,
                url: ddgResult.i,
                link: ddgResult.c,
            },
        };
    }
    return;
});
exports.songlyrics = songlyrics;
