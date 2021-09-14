import { isEdge, isNode } from "react-flow-renderer";

export interface Vector {
  x: number;
  y: number;
}

export function vectorAdd(vector1: Vector, vector2: Vector) {
  return {
    x: vector1.x + vector2.x,
    y: vector1.y + vector2.y
  }
}

export interface FlowGraph {
  startId: string;
  nodeMap: {
    [key: string]: any
  }
}

export function parseToGraph(flowData: any): FlowGraph {
  let startNodeId = null;
  const output: FlowGraph = {
    startId: '',
    nodeMap: {}
  };
  // Add all the nodes in first
  for (const element of flowData) {
    if (isNode(element)) {
      if (element.type === "input") {
        startNodeId = element.id;
      } else if (element.type === "question") {
        output.nodeMap[element.id] = {
          type: 'question',
          question: element.data.question,
          answers: element.data.answers.map((a: any) => {
            return {
              text: a.text,
              nextId: null
            }
          })
        }
      } else if (element.type === "end") {
        output.nodeMap[element.id] = {
          type: 'end',
          result: element.data.result
        }
      }
    }
  }
  if (startNodeId === null) {
    console.log('There is no start node')
  }
  // Add all the edges
  for (const element of flowData) {
    if (isEdge(element)) {
      if (element.source === startNodeId) {
        output.startId = element.target;
      } else {
        output.nodeMap[element.source]
          .answers[parseInt(element.sourceHandle!,10)].nextId = element.target;
      }
    }
  }
  return output;
}

export function download(content: string, fileName: string, contentType: string) {
  const a = document.createElement("a");
  const file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

export async function fileToJSON(file: File) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = event => resolve(JSON.parse(event!.target!.result as any))
    fileReader.onerror = error => reject(error)
    fileReader.readAsText(file)
  })
}