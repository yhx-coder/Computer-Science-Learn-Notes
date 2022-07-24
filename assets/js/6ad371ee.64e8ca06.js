"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1080],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(k,i(i({ref:e},s),{},{components:n})):r.createElement(k,i({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85836:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={},i="\u5b9e\u73b0 strStr()",o={unversionedId:"Java/leetcode/src/Strings/\u5b9e\u73b0strStr()",id:"Java/leetcode/src/Strings/\u5b9e\u73b0strStr()",title:"\u5b9e\u73b0 strStr()",description:"https://leetcode-cn.com/problems/implement-strstr/",source:"@site/docs/Java/leetcode/src/Strings/28-\u5b9e\u73b0strStr().md",sourceDirName:"Java/leetcode/src/Strings",slug:"/Java/leetcode/src/Strings/\u5b9e\u73b0strStr()",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/Strings/\u5b9e\u73b0strStr()",draft:!1,editUrl:"https://github.com/zhiyu1998/Computer-Science-Learn-Notes/edit/master/docs/Java/leetcode/src/Strings/28-\u5b9e\u73b0strStr().md",tags:[],version:"current",sidebarPosition:28,frontMatter:{},sidebar:"sidebars",previous:{title:"\u529b\u6263\u94fe\u8868\u4e13\u9898\u5e38\u7528\u65b9\u6cd5\u5c01\u88c5",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/LinkedList/\u5e38\u7528\u65b9\u6cd5\u5c01\u88c5\u5408\u96c6"},next:{title:"\u98a0\u5012\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcd",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/Strings/\u98a0\u5012\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcd"}},p={},c=[{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",level:2},{value:"\u5a31\u4e50\u5199\u6cd5",id:"\u5a31\u4e50\u5199\u6cd5",level:2},{value:"\u66b4\u529b\u5339\u914d",id:"\u66b4\u529b\u5339\u914d",level:2},{value:"KMP",id:"kmp",level:2}],s={toc:c};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5b9e\u73b0-strstr"},"\u5b9e\u73b0 strStr()"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/implement-strstr/"},"https://leetcode-cn.com/problems/implement-strstr/")),(0,a.kt)("h2",{id:"\u95ee\u9898\u63cf\u8ff0"},"\u95ee\u9898\u63cf\u8ff0"),(0,a.kt)("p",null,"\u5b9e\u73b0 strStr() \u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e24\u4e2a\u5b57\u7b26\u4e32 haystack \u548c needle \uff0c\u8bf7\u4f60\u5728 haystack \u5b57\u7b26\u4e32\u4e2d\u627e\u51fa needle \u5b57\u7b26\u4e32\u51fa\u73b0\u7684\u7b2c\u4e00\u4e2a\u4f4d\u7f6e\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09\u3002\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56de  -1 \u3002"),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("p",null,"\u5f53 needle \u662f\u7a7a\u5b57\u7b26\u4e32\u65f6\uff0c\u6211\u4eec\u5e94\u5f53\u8fd4\u56de\u4ec0\u4e48\u503c\u5462\uff1f\u8fd9\u662f\u4e00\u4e2a\u5728\u9762\u8bd5\u4e2d\u5f88\u597d\u7684\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u672c\u9898\u800c\u8a00\uff0c\u5f53 needle \u662f\u7a7a\u5b57\u7b26\u4e32\u65f6\u6211\u4eec\u5e94\u5f53\u8fd4\u56de 0 \u3002\u8fd9\u4e0e C \u8bed\u8a00\u7684 strstr() \u4ee5\u53ca Java \u7684 indexOf() \u5b9a\u4e49\u76f8\u7b26\u3002"),(0,a.kt)("h2",{id:"\u5a31\u4e50\u5199\u6cd5"},"\u5a31\u4e50\u5199\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int strStr(String haystack, String needle) {\n        return haystack.indexOf(needle);\n    }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7ed3\u679c\uff1a\u901a\u8fc7"),(0,a.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6\uff1a0 ms, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e86100.00% \u7684\u7528\u6237"),(0,a.kt)("p",{parentName:"blockquote"},"\u5185\u5b58\u6d88\u8017\uff1a39 MB, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8688.24% \u7684\u7528\u6237"),(0,a.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u6d4b\u8bd5\u7528\u4f8b\uff1a75 / 75")),(0,a.kt)("h2",{id:"\u66b4\u529b\u5339\u914d"},"\u66b4\u529b\u5339\u914d"),(0,a.kt)("p",null,"\u5199\u4e86\u534a\u5929\u7684KMP\uff0c\u4ee3\u7801\u6ca1\u5199\u51fa\u6765\uff0c\u4eba\u5012\u662f\u5199\u6ca1\u4e86\uff0c\u5b8c\u7ed3\u6492\u82b1\uff01"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int strStr(String haystack, String needle) {\n        final int M = haystack.length();\n        final int N = needle.length();\n\n\n        for (int i = 0; i <= M - N; i++) {\n            int j;\n            for (j = 0; j < N; j++) {\n                if (haystack.charAt(i + j) != needle.charAt(j)) {\n                    break;\n                }\n            }\n            if (j == N) return i;\n        }\n        return -1;\n    }\n}\n")),(0,a.kt)("h2",{id:"kmp"},"KMP"),(0,a.kt)("p",null,"\u6709\u70b9\u9057\u5fd8KMP\u7b97\u6cd5\u7684\u5c0f\u4f19\u4f34\u53ef\u4ee5\u8f6c\u79fb\u5230\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://labuladong.github.io/algo/3/26/97/"},"https://labuladong.github.io/algo/3/26/97/")," \uff0c\u5f53\u7406\u89e3\u4e86\u72b6\u6001\u673a\u7684\u6982\u5ff5KMP\u5199\u51fa\u6765\u4e5f\u5c31\u4e0d\u8fdc\u4e86"),(0,a.kt)("p",null,"\u4e2a\u4eba\u5bf9\u72b6\u6001\u673a\u5728KMP\u4e2d\u7684\u7406\u89e3\uff1a"),(0,a.kt)("p",null,"\u8f6c\u79fb\u4f4d\u7f6e\u662f\u600e\u6837\u8f6c\u79fb\u7684\uff1f\u5982\u679c\u5728\u72b6\u6001\u673a\u4e2d\u53d1\u751f\u4e0d\u5339\u914d\u7684\u65f6\u5019\uff0c\uff08\u6bd4\u5982\u56fe\u4e2d\u7b2c\u4e00\u6b21\u4e0d\u5339\u914d\u7684\u4f4d\u7f6e\u662fA\u548cB\uff0cpat\u7684\u7b2c\u56db\u4e2a\u4f4d\u7f6e\uff09\u6b64\u65f6\u662fB\uff0c\u72b6\u6001\u673a\u76f4\u63a5\u8f6c\u79fb\u5230\u7b2c\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u6240\u4ee5i\u5bf9\u5e94\u7684\u5c31\u662fpat\u7684\u7b2c\u4e00\u4e2a\u4f4d\u7f6e\uff1b\u540c\u7406\uff0c\u7b2c\u4e8c\u6b21\u4e0d\u5339\u914d\u53d1\u751f\u5728A\u548cC\uff08\u56e0\u4e3a\u5339\u914d\u7684\u662fA\uff09\u76f4\u63a5\u8f6c\u5230\u72b6\u60013\uff0c\u6240\u4ee5\u5f53\u524d\u4f4d\u7f6epat\u548ci\u5bf9\u5e94\u7684\u4f4d\u7f6e\u5c31\u662fpat\u7684\u7b2c\u4e09\u4e2a\u4f4d\u7f6e\uff08\u6307\u5411pat\u7684\u4f4d\u7f6e\u524d\u9762\u6709\u4e24\u4e2a\u5b57\u6bcd\uff09\uff1b\u603b\u7684\u610f\u601d\u662f\u72b6\u6001\u673a\u8f6c\u79fb\u7684\u4f4d\u7f6e\u5c31\u662fpat\u548ci\u5f53\u524d\u6240\u6307\u5411\u7684\u4f4d\u7f6e\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://labuladong.github.io/algo/images/kmp/kmp.gif",alt:null})),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u8fd8\u8981\u7406\u89e3\u4e24\u4e2a\u6982\u5ff5\uff1a\u72b6\u6001\u63a8\u8fdb\u3001\u72b6\u6001\u91cd\u542f"),(0,a.kt)("p",null,"\u53ca\u50cf\u9047\u5230A\u4e3a\u4ec0\u4e48\u8981\u8f6c\u79fb\u5230\u72b6\u60013\uff1f\u9047\u5230B\u4e3a\u4ec0\u4e48\u80fd\u8f6c\u79fb\u5230\u72b6\u60010\uff1f"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://labuladong.github.io/algo/images/kmp/forward.jpg",alt:null})),(0,a.kt)("p",null,"\u7136\u540e\u5b9e\u73b0\u5b83"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class KMP {\n\n    private int[][] dp;\n\n    public KMP(String pat) {\n        int M = pat.length();\n        dp = new int[M][256];\n        // \u5f71\u5b50\u72b6\u6001\n        int X = 0;\n        // \u542f\u52a8 (X\u7684\u6700\u521d\u53d8\u5316\u4e5f\u662f\u56e0\u4e3a\u6709\u5b83)\n        dp[0][pat.charAt(0)] = 1;\n\n        for (int i = 1; i < M; i++) {\n            for (int j = 0; j < 256; j++) {\n                // \u53ea\u6709\u9047\u5230pat\u4e2d\u4e00\u6837\u7684\u5b57\u7b26 -> \u63a8\u8fdb\u72b6\u6001\n                if (pat.charAt(i) == j) {\n                    dp[i][j] = i + 1;\n                } else { // \u5176\u4ed6\u5b57\u7b26 -> \u91cd\u542f\u72b6\u6001\n                    dp[i][j] = dp[X][j];\n                }\n            }\n            // \u66f4\u65b0\u5f71\u5b50 (\u4ee5ABABC\u4e3a\u4f8b, \u4e00\u5f00\u59cb\u5f71\u5b50\u662f0\uff0c\n            // \u5230\u7b2c\u4e8c\u4e2aA\uff08\u4f4d\u7f6e3\uff09\uff0c\u6b64\u65f6X=0\uff0c\u6240\u4ee5\u53bbdp\u4e2d[0]\u768465\uff08'A'\uff09\u4f4d\u7f6e\u627e\uff0c\u4e5f\u5c31\u662f\u542f\u52a8A\u7684\u4f4d\u7f6e(0) --\x3e X = 1\n            // B\u7684\u4f4d\u7f6e(\u4f4d\u7f6e4)\uff0c\u6b64\u65f6X=1\uff0c\u5728dp[1][66]\u7684\u503c\u4e3a2\uff0c\u8bf4\u660e\u4e0b\u6b21\u91cd\u542f\u4f1a\u5728\u4f4d\u7f6e3) --\x3e X = 2\n            // \u6ce8\uff1a\u8fd9\u91cc\u7684dp[1][66]\u7684\u503c\u4e3a\u4ec0\u4e48==2, \u57281\u7684\u4f4d\u7f6e\u4e0a(ABABC)\u521a\u597d\u4e3aB\uff0c\u6240\u4ee5\u8fd9\u4e2a\u503c\u4e3ai + 1 = 2\n            X = dp[X][pat.charAt(i)];\n        }\n    }\n\n    public int search(String txt, String pat) {\n        final int N = txt.length();\n        final int M = pat.length();\n\n        int j = 0;\n        for (int i = 0; i < N; i++) {\n            j = dp[j][txt.charAt(i)];\n            if (j == M) return i - M + 1;\n        }\n        return -1;\n    }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7ed3\u679c\uff1a\u901a\u8fc7"),(0,a.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6\uff1a3 ms, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8675.11% \u7684\u7528\u6237"),(0,a.kt)("p",{parentName:"blockquote"},"\u5185\u5b58\u6d88\u8017\uff1a41.4 MB, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8623.58% \u7684\u7528\u6237"),(0,a.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u6d4b\u8bd5\u7528\u4f8b\uff1a75 / 75")))}u.isMDXComponent=!0}}]);