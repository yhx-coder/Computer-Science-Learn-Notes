"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9481],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(i,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},68744:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},l="\u4e8c\u7ef4\u6570\u7ec4\u4e2d\u7684\u67e5\u627e",c={unversionedId:"Java/leetcode/src/\u5251\u6307offer/\u4e8c\u7ef4\u6570\u7ec4\u4e2d\u7684\u67e5\u627e",id:"Java/leetcode/src/\u5251\u6307offer/\u4e8c\u7ef4\u6570\u7ec4\u4e2d\u7684\u67e5\u627e",title:"\u4e8c\u7ef4\u6570\u7ec4\u4e2d\u7684\u67e5\u627e",description:"https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/",source:"@site/docs/Java/leetcode/src/\u5251\u6307offer/04-\u4e8c\u7ef4\u6570\u7ec4\u4e2d\u7684\u67e5\u627e.md",sourceDirName:"Java/leetcode/src/\u5251\u6307offer",slug:"/Java/leetcode/src/\u5251\u6307offer/\u4e8c\u7ef4\u6570\u7ec4\u4e2d\u7684\u67e5\u627e",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/\u5251\u6307offer/\u4e8c\u7ef4\u6570\u7ec4\u4e2d\u7684\u67e5\u627e",draft:!1,editUrl:"https://github.com/zhiyu1998/Computer-Science-Learn-Notes/edit/master/docs/Java/leetcode/src/\u5251\u6307offer/04-\u4e8c\u7ef4\u6570\u7ec4\u4e2d\u7684\u67e5\u627e.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"sidebars",previous:{title:"\u6570\u7ec4\u4e2d\u91cd\u590d\u7684\u6570\u5b57",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/\u5251\u6307offer/\u6570\u7ec4\u4e2d\u91cd\u590d\u7684\u6570\u5b57"},next:{title:"\u5251\u6307 Offer 09. \u7528\u4e24\u4e2a\u6808\u5b9e\u73b0\u961f\u5217",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/\u5251\u6307offer/\u7528\u4e24\u4e2a\u6808\u5b9e\u73b0\u961f\u5217"}},i={},p=[{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",level:2},{value:"\u7b2c\u4e00\u60f3\u6cd5\uff1a\u6d41 + \u4e8c\u53c9\u6811",id:"\u7b2c\u4e00\u60f3\u6cd5\u6d41--\u4e8c\u53c9\u6811",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e8c\u7ef4\u6570\u7ec4\u4e2d\u7684\u67e5\u627e"},"\u4e8c\u7ef4\u6570\u7ec4\u4e2d\u7684\u67e5\u627e"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/"},"https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/")),(0,a.kt)("h2",{id:"\u95ee\u9898\u63cf\u8ff0"},"\u95ee\u9898\u63cf\u8ff0"),(0,a.kt)("p",null,"\u5728\u4e00\u4e2a n * m \u7684\u4e8c\u7ef4\u6570\u7ec4\u4e2d\uff0c\u6bcf\u4e00\u884c\u90fd\u6309\u7167\u4ece\u5de6\u5230\u53f3\u9012\u589e\u7684\u987a\u5e8f\u6392\u5e8f\uff0c\u6bcf\u4e00\u5217\u90fd\u6309\u7167\u4ece\u4e0a\u5230\u4e0b\u9012\u589e\u7684\u987a\u5e8f\u6392\u5e8f\u3002\u8bf7\u5b8c\u6210\u4e00\u4e2a\u9ad8\u6548\u7684\u51fd\u6570\uff0c\u8f93\u5165\u8fd9\u6837\u7684\u4e00\u4e2a\u4e8c\u7ef4\u6570\u7ec4\u548c\u4e00\u4e2a\u6574\u6570\uff0c\u5224\u65ad\u6570\u7ec4\u4e2d\u662f\u5426\u542b\u6709\u8be5\u6574\u6570\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[\n","[1,   4,  7, 11, 15]",",\n","[2,   5,  8, 12, 19]",",\n","[3,   6,  9, 16, 22]",",\n","[10, 13, 14, 17, 24]",",\n","[18, 21, 23, 26, 30]","\n]"),(0,a.kt)("p",{parentName:"blockquote"},"\u7ed9\u5b9a target = ",(0,a.kt)("inlineCode",{parentName:"p"},"5"),"\uff0c\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"\u7ed9\u5b9a target = ",(0,a.kt)("inlineCode",{parentName:"p"},"20"),"\uff0c\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3002")),(0,a.kt)("h2",{id:"\u7b2c\u4e00\u60f3\u6cd5\u6d41--\u4e8c\u53c9\u6811"},"\u7b2c\u4e00\u60f3\u6cd5\uff1a\u6d41 + \u4e8c\u53c9\u6811"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public boolean findNumberIn2DArray(int[][] matrix, int target) {\n        List<Integer> list = Stream.of(matrix).map(line -> Arrays.binarySearch(line, target)).collect(Collectors.toList());\n        for (Integer i : list) {\n            if (i >= 0) {\n                return true;\n            }\n        }\n        return false;\n    }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7ed3\u679c\uff1a\u901a\u8fc7"),(0,a.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6\uff1a3 ms, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e86100.00% \u7684\u7528\u6237"),(0,a.kt)("p",{parentName:"blockquote"},"\u5185\u5b58\u6d88\u8017\uff1a47.1 MB, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8655.89% \u7684\u7528\u6237"),(0,a.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u6d4b\u8bd5\u7528\u4f8b\uff1a129 / 129")),(0,a.kt)("p",null,"\u7136\u540e\u6211\u53c8\u8fdb\u4e00\u6b65\u7cbe\u7b80\uff08\u66f4\u61d2\u7684\u5199\u6cd5\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public boolean findNumberIn2DArray(int[][] matrix, int target) {\n                return Stream.of(matrix).map(line -> Arrays.binarySearch(line, target)).filter(x -> x >= 0).count() > 0 ? true : false;\n    }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7ed3\u679c\uff1a\u901a\u8fc7"),(0,a.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6\uff1a4 ms, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e86100.00% \u7684\u7528\u6237"),(0,a.kt)("p",{parentName:"blockquote"},"\u5185\u5b58\u6d88\u8017\uff1a47.2 MB, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8645.00% \u7684\u7528\u6237"),(0,a.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u6d4b\u8bd5\u7528\u4f8b\uff1a129 / 129")),(0,a.kt)("p",null,"\u53e6\u5916\u770b\u5230\u8bc4\u8bba\u533a\u6709\u8bf4\uff1a\u7ad9\u5728\u53f3\u4e0a\u89d2\u770b\u3002\u8fd9\u4e2a\u77e9\u9635\u5176\u5b9e\u5c31\u50cf\u662f\u4e00\u4e2aBinary Search Tree\u3002\u8fd9\u4e2a\u8fd8\u60f3\u597d\u600e\u4e48\u5199"))}s.isMDXComponent=!0}}]);