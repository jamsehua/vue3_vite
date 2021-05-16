
export function addParentKeyWrapper (tree:Array) { // 为子节点添加父级的key
  const data = JSON.parse(JSON.stringify(tree)); // 深度克隆（deepClone）
  function addParentKey(data, parentKey) {
    data.forEach(ele => {
    const { children, path } = ele;
    ele.parent = parentKey;
    if (children){
      addParentKey(children, path);
    }
    })
  }
  addParentKey(data, null); // 一开始的时候是null
  return data;
}

// export function getParentNode(data, nodeId, arrRes) {
//   // console.log(data, nodeId, arrRes);
//   // debugger
//   if (!data ) {
//       if (!nodeId) {
//           arrRes.unshift(nodeId);
//       }
//       return arrRes;
//   }
//   for (let i = 0, length = data.length; i < length; i++) {
//       let node = data[i];
//       if (node.path == nodeId) {
//           arrRes.unshift(nodeId);
//           console.log({data});
//           getParentNode(data, node.parent, arrRes);
//           break;
//       }
//       else {
//           if (!!node.children) {
//               getParentNode(node.children, nodeId, arrRes);
//           }
//       }
      
//   }
//   return arrRes;
// };
