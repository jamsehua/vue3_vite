const treeData = [
  {
       title: '0-0',
       key: '0-0',
       children: [
           {
               title: '0-0-1',
               key: '0-0-1',
               children: [
                   { title: '0-0-1-0', key: '0-0-1-0' },
                   { title: '0-0-1-1', key: '0-0-1-1' },
                   { title: '0-0-1-2', key: '0-0-1-2' }
               ],
           },
       ],
   },
   {
       title: '0-2',
       key: '0-2',
   }
];
const router = [
  {
    "path": "/home",
    "name": "Home",
    "meta": {
        "title": "首页",
        "icon": "HomeOutlined"
    },
    "component": {
        "name": "routerview",
        "__file": "/Users/zhangfeng/zhanghua/promotion/vite/vite_two/src/layout/RouterView/index.vue",
        "__hmrId": "7252a0ad"
    },
    "children": [
        {
            "path": "/demo",
            "name": "detailHome",
            "meta": {
                "title": "首页详情"
            },
            "component": {
                "name": "routerview",
                "__file": "/Users/zhangfeng/zhanghua/promotion/vite/vite_two/src/layout/RouterView/index.vue",
                "__hmrId": "7252a0ad"
            },
            "children": [
                {
                    "path": "/homeDetail",
                    "name": "HomeDetail",
                    "meta": {
                        "title": "详情首页"
                    }
                },
                {
                    "path": "/homeList",
                    "name": "HomeList",
                    "meta": {
                        "title": "模块页"
                    }
                }
            ]
        },
        {
            "path": "/sanitation",
            "name": "Sanitation",
            "meta": {
                "title": "测试页"
            }
        }
    ]
  },
  {
    "path": "/home1",
    "name": "Home",
    "meta": {
        "title": "首页",
        "icon": "HomeOutlined"
    },
    "component": {
        "name": "routerview",
        "__file": "/Users/zhangfeng/zhanghua/promotion/vite/vite_two/src/layout/RouterView/index.vue",
        "__hmrId": "7252a0ad"
    },
    "children": [
        {
            "path": "/demo1",
            "name": "detailHome",
            "meta": {
                "title": "首页详情"
            },
            "component": {
                "name": "routerview",
                "__file": "/Users/zhangfeng/zhanghua/promotion/vite/vite_two/src/layout/RouterView/index.vue",
                "__hmrId": "7252a0ad"
            },
        }
    ]
  },
]

// 1. 为子节点添加父级的key
function addParentKeyWrapper (tree) {
   const data = JSON.parse(JSON.stringify(tree)); // 深度克隆（deepClone）
   function addParentKey(data, parentKey) {
     console.log(data, parentKey)
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


// 2.给了树中间的某个节点，如何去寻找该节点所有的父级节点呢？
// 答案是：把树拉平。（每个节点之间的联系依靠parentKey属性）
function flattenTreeDataClosure(data){
   const treeData = JSON.parse(JSON.stringify(data));
   const flattenData = [];
   function flattenTree(data, parentKey) {
       data.forEach(ele => {
           const { path, children } = ele;
           flattenData.push({ path, parentKey });
           if (children){
               flattenTree(children, path);
           }
       })
   }
   flattenTree(treeData, null);
   return flattenData;
}
const result = flattenTreeDataClosure(router);
console.log(result);

// 3.给个节点0-0-1-0，找到ta所有的父级节点
function findParent(item, flattenTree){
   const parentArr = []; // 存储所有的父级元素
   function find(item, flattenTree) {
       flattenTree.forEach(ele => {
           if (ele.path === item){
               parentArr.unshift(ele.path);
               find(ele.parentKey, flattenTree);
           }
       })
   }
   find(item, flattenTree);
   return parentArr;
}
console.log(findParent('/homeDetail', result))
// console.log(addParentKeyWrapper(treeData));