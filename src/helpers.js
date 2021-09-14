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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_flow_renderer_1 = require("react-flow-renderer");
function vectorAdd(vector1, vector2) {
    return {
        x: vector1.x + vector2.x,
        y: vector1.y + vector2.y
    };
}
exports.vectorAdd = vectorAdd;
function parseToGraph(flowData) {
    var startNodeId = null;
    var output = {
        startId: '',
        nodeMap: {}
    };
    // Add all the nodes in first
    for (var _i = 0, flowData_1 = flowData; _i < flowData_1.length; _i++) {
        var element = flowData_1[_i];
        if (react_flow_renderer_1.isNode(element)) {
            if (element.type === "input") {
                startNodeId = element.id;
            }
            else if (element.type === "question") {
                output.nodeMap[element.id] = {
                    type: 'question',
                    question: element.data.question,
                    answers: element.data.answers.map(function (a) {
                        return {
                            text: a.text,
                            nextId: null
                        };
                    })
                };
            }
            else if (element.type === "end") {
                output.nodeMap[element.id] = {
                    type: 'end',
                    result: element.data.result
                };
            }
        }
    }
    if (startNodeId === null) {
        console.log('There is no start node');
    }
    // Add all the edges
    for (var _a = 0, flowData_2 = flowData; _a < flowData_2.length; _a++) {
        var element = flowData_2[_a];
        if (react_flow_renderer_1.isEdge(element)) {
            if (element.source === startNodeId) {
                output.startId = element.target;
            }
            else {
                output.nodeMap[element.source]
                    .answers[parseInt(element.sourceHandle, 10)].nextId = element.target;
            }
        }
    }
    return output;
}
exports.parseToGraph = parseToGraph;
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
exports.download = download;
function fileToJSON(file) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var fileReader = new FileReader();
                    fileReader.onload = function (event) { return resolve(JSON.parse(event.target.result)); };
                    fileReader.onerror = function (error) { return reject(error); };
                    fileReader.readAsText(file);
                })];
        });
    });
}
exports.fileToJSON = fileToJSON;
