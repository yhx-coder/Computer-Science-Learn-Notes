"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1656],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},l="\u98a0\u5012\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcd",s={unversionedId:"Java/leetcode/src/Strings/\u98a0\u5012\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcd",id:"Java/leetcode/src/Strings/\u98a0\u5012\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcd",title:"\u98a0\u5012\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcd",description:"https://leetcode-cn.com/problems/reverse-words-in-a-string/",source:"@site/docs/Java/leetcode/src/Strings/151-\u98a0\u5012\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcd.md",sourceDirName:"Java/leetcode/src/Strings",slug:"/Java/leetcode/src/Strings/\u98a0\u5012\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcd",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/Strings/\u98a0\u5012\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcd",draft:!1,editUrl:"https://github.com/zhiyu1998/Computer-Science-Learn-Notes/edit/master/docs/Java/leetcode/src/Strings/151-\u98a0\u5012\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcd.md",tags:[],version:"current",sidebarPosition:151,frontMatter:{},sidebar:"sidebars",previous:{title:"\u5b9e\u73b0 strStr()",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/Strings/\u5b9e\u73b0strStr()"},next:{title:"\u53cd\u8f6c\u5b57\u7b26\u4e32",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/Strings/\u53cd\u8f6c\u5b57\u7b26\u4e32"}},o={},c=[{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",level:2},{value:"\u7b2c\u4e00\u60f3\u6cd5\uff1a\u76f4\u63a5trim() + split()\u8c03\u7528API",id:"\u7b2c\u4e00\u60f3\u6cd5\u76f4\u63a5trim--split\u8c03\u7528api",level:2},{value:"\u7b2c\u4e8c\u60f3\u6cd5\uff1a\u4e24\u6b21\u53cd\u8f6c\uff08\u5168\u5c40\u53cd\u8f6c+\u5c40\u90e8\u53cd\u8f6c\uff09",id:"\u7b2c\u4e8c\u60f3\u6cd5\u4e24\u6b21\u53cd\u8f6c\u5168\u5c40\u53cd\u8f6c\u5c40\u90e8\u53cd\u8f6c",level:2},{value:"\u53e6\u5916\u9898\u89e3\uff1a\u53cc\u7aef\u961f\u5217\u3001\u53cc\u6307\u9488\u540e\u7eed\u8865\u5145",id:"\u53e6\u5916\u9898\u89e3\u53cc\u7aef\u961f\u5217\u53cc\u6307\u9488\u540e\u7eed\u8865\u5145",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u98a0\u5012\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcd"},"\u98a0\u5012\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcd"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/reverse-words-in-a-string/"},"https://leetcode-cn.com/problems/reverse-words-in-a-string/")),(0,a.kt)("h2",{id:"\u95ee\u9898\u63cf\u8ff0"},"\u95ee\u9898\u63cf\u8ff0"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 s \uff0c\u98a0\u5012\u5b57\u7b26\u4e32\u4e2d \u5355\u8bcd \u7684\u987a\u5e8f\u3002"),(0,a.kt)("p",null,"\u5355\u8bcd \u662f\u7531\u975e\u7a7a\u683c\u5b57\u7b26\u7ec4\u6210\u7684\u5b57\u7b26\u4e32\u3002s \u4e2d\u4f7f\u7528\u81f3\u5c11\u4e00\u4e2a\u7a7a\u683c\u5c06\u5b57\u7b26\u4e32\u4e2d\u7684 \u5355\u8bcd \u5206\u9694\u5f00\u3002"),(0,a.kt)("p",null,"\u8fd4\u56de \u5355\u8bcd \u987a\u5e8f\u98a0\u5012\u4e14 \u5355\u8bcd \u4e4b\u95f4\u7528\u5355\u4e2a\u7a7a\u683c\u8fde\u63a5\u7684\u7ed3\u679c\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u8f93\u5165\u5b57\u7b26\u4e32 s\u4e2d\u53ef\u80fd\u4f1a\u5b58\u5728\u524d\u5bfc\u7a7a\u683c\u3001\u5c3e\u968f\u7a7a\u683c\u6216\u8005\u5355\u8bcd\u95f4\u7684\u591a\u4e2a\u7a7a\u683c\u3002\u8fd4\u56de\u7684\u7ed3\u679c\u5b57\u7b26\u4e32\u4e2d\uff0c\u5355\u8bcd\u95f4\u5e94\u5f53\u4ec5\u7528\u5355\u4e2a\u7a7a\u683c\u5206\u9694\uff0c\u4e14\u4e0d\u5305\u542b\u4efb\u4f55\u989d\u5916\u7684\u7a7a\u683c\u3002"),(0,a.kt)("h2",{id:"\u7b2c\u4e00\u60f3\u6cd5\u76f4\u63a5trim--split\u8c03\u7528api"},"\u7b2c\u4e00\u60f3\u6cd5\uff1a\u76f4\u63a5trim() + split()\u8c03\u7528API"),(0,a.kt)("p",null,"\u5bf9\uff0c\u6ca1\u9519\uff0c\u6211\u662f\u4e00\u4e2a\u51b7\u9177\u65e0\u60c5 API \u9009\u624b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'class Solution {\n    public String reverseWords(String s) {\n        s = s.trim();\n        String[] strs = s.split("\\s+");\n        int left = 0;\n        int right = strs.length - 1;\n        while (left < right) {\n            String temp = strs[left];\n            strs[left] = strs[right];\n            strs[right] = temp;\n            left++;right--;\n        }\n        return String.join(" ", strs);\n    }\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"58 / 58")," \u4e2a\u901a\u8fc7\u6d4b\u8bd5\u7528\u4f8b"),(0,a.kt)("p",{parentName:"blockquote"},"\u72b6\u6001\uff1a",(0,a.kt)("em",{parentName:"p"},"\u901a\u8fc7")),(0,a.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6: ",(0,a.kt)("strong",{parentName:"p"},"7 ms")),(0,a.kt)("p",{parentName:"blockquote"},"\u5185\u5b58\u6d88\u8017: ",(0,a.kt)("strong",{parentName:"p"},"41 MB"))),(0,a.kt)("p",null,"\u66f4\u7cbe\u7b80\u7684API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'class Solution {\n    public String reverseWords(String s) {\n        // \u9664\u53bb\u5f00\u5934\u548c\u672b\u5c3e\u7684\u7a7a\u767d\u5b57\u7b26\n        s = s.trim();\n        // \u6b63\u5219\u5339\u914d\u8fde\u7eed\u7684\u7a7a\u767d\u5b57\u7b26\u4f5c\u4e3a\u5206\u9694\u7b26\u5206\u5272\n        List<String> wordList = Arrays.asList(s.split("\\\\s+"));\n        Collections.reverse(wordList);\n        return String.join(" ", wordList);\n    }\n}\n')),(0,a.kt)("h2",{id:"\u7b2c\u4e8c\u60f3\u6cd5\u4e24\u6b21\u53cd\u8f6c\u5168\u5c40\u53cd\u8f6c\u5c40\u90e8\u53cd\u8f6c"},"\u7b2c\u4e8c\u60f3\u6cd5\uff1a\u4e24\u6b21\u53cd\u8f6c\uff08\u5168\u5c40\u53cd\u8f6c+\u5c40\u90e8\u53cd\u8f6c\uff09"),(0,a.kt)("p",null,"\u601d\u8def\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9996\u5148\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5b57\u7b26\u6570\u7ec4"),(0,a.kt)("li",{parentName:"ol"},"\u8fdb\u884c\u5168\u5c40\u7684\u53cd\u8f6c"),(0,a.kt)("li",{parentName:"ol"},"\u56e0\u4e3a\u5b57\u7b26\u4e32\u6700\u540e\u7ed3\u679c\u957f\u5ea6\u6539\u53d8\u4e86\uff0c\u6240\u4ee5\u91c7\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"StringBuilder"),"\u91cd\u5efa\u5b57\u7b26\u4e32"),(0,a.kt)("li",{parentName:"ol"},"\u9010\u4e2a\u5224\u65ad",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u9047\u5230\u524d\u9762\u662f\u7a7a\u683c\uff0c\u5f53\u524d\u4e5f\u662f\u7a7a\u683c\uff0c\u76f4\u63a5\u8df3\u8fc7"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u9047\u5230\u7a7a\u683c\uff0c\u5219\u628a\u5f00\u59cb\u4f4d\u7f6e\u79fb\u5230\u4e0b\u4e00\u4e2a\u4f4d\u7f6e\uff08\u4e0b\u4e00\u4e2a\u5355\u8bcd\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u6709\u4e86\u4ee5\u4e0a\u7684\u7ef4\u62a4\uff0c\u5c31\u53ef\u4ee5\u8fdb\u884c\u53cd\u8f6c\uff08\u4e0a\u4e00\u6b21\u7684start\u4f4d\u7f6e \u5230  \u5f53\u524d\u7a7a\u683c\u7684\u4e0a\u4e00\u4e2a\u4f4d\u7f6e\u3010\u4e0d\u662f\u7a7a\u683c\u3011\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u52a0\u5165\u5230StringBuilder"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"if (i == n - 1)"),"\u662f\u62ff\u6765\u5224\u65ad\u6700\u540e\u4e00\u4e2a\u5355\u8bcd\u7684"))),(0,a.kt)("li",{parentName:"ol"},"\u6700\u540e\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public String reverseWords(String s) {\n        s = s.trim();\n        char[] ch = s.toCharArray();\n        final int n = s.length();\n        // global\n        reverse(ch, 0, n - 1);\n        // local\n        StringBuilder sb = new StringBuilder();\n        int start = 0;\n        for (int i = 0; i < n; i++) {\n            if (ch[i] == 32) {\n                if (ch[i-1] == ch[i]) {\n                    start = i + 1;\n                    continue;\n                }\n                reverse(ch, start, i - 1);\n                sb.append(ch, start, i - start + 1);\n                start = i+1;\n            } if (i == n - 1) {\n                reverse(ch, start, n -1);\n                sb.append(ch, start, n - start);\n            }\n        }\n        return sb.toString();\n    }\n\n    private void reverse(char[] ch, int left, int right) {\n        while (left < right) {\n            char temp = ch[left];\n            ch[left] = ch[right];\n            ch[right] = temp;\n            left++;right--;\n        }\n    }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7ed3\u679c\uff1a\u901a\u8fc7"),(0,a.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6\uff1a2 ms, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8696.84% \u7684\u7528\u6237"),(0,a.kt)("p",{parentName:"blockquote"},"\u5185\u5b58\u6d88\u8017\uff1a41.2 MB, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8644.26% \u7684\u7528\u6237"),(0,a.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u6d4b\u8bd5\u7528\u4f8b\uff1a58 / 58")),(0,a.kt)("p",null,"\u8fdb\u4e00\u6b65\u4f18\u5316\uff0c\u5220\u9664\u4e86trim()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public String reverseWords(String s) {\n        int start = 0;\n        int end = s.length() - 1;\n        char[] ch = s.toCharArray();\n        // clear left space\n        while(ch[start]==' '){\n            start++;\n        }\n        // clear right space\n        while(ch[end]==' '){\n            end--;\n        }\n        // global\n        reverse(ch, start, end);\n        // local\n        StringBuilder sb = new StringBuilder();\n        for (int i = start; i <= end; i++) {\n            if (ch[i] == 32) {\n                if (ch[i-1] == ch[i]) {\n                    start = i + 1;\n                    continue;\n                }\n                reverse(ch, start, i - 1);\n                sb.append(ch, start, i - start + 1);\n                start = i+1;\n            } if (i == end) {\n                reverse(ch, start, end);\n                sb.append(ch, start, end - start + 1);\n            }\n        }\n        return sb.toString();\n    }\n\n    private void reverse(char[] ch, int left, int right) {\n        while (left < right) {\n            char temp = ch[left];\n            ch[left] = ch[right];\n            ch[right] = temp;\n            left++;right--;\n        }\n    }\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7ed3\u679c\uff1a\u901a\u8fc7"),(0,a.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6\uff1a2 ms, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8696.84% \u7684\u7528\u6237"),(0,a.kt)("p",{parentName:"blockquote"},"\u5185\u5b58\u6d88\u8017\uff1a41 MB, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8671.48% \u7684\u7528\u6237"),(0,a.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u6d4b\u8bd5\u7528\u4f8b\uff1a58 / 58")),(0,a.kt)("h2",{id:"\u53e6\u5916\u9898\u89e3\u53cc\u7aef\u961f\u5217\u53cc\u6307\u9488\u540e\u7eed\u8865\u5145"},"\u53e6\u5916\u9898\u89e3\uff1a\u53cc\u7aef\u961f\u5217\u3001\u53cc\u6307\u9488\u540e\u7eed\u8865\u5145"))}u.isMDXComponent=!0}}]);