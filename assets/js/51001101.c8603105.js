"use strict";(self.webpackChunkmetro_website=self.webpackChunkmetro_website||[]).push([[645],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>m,MDXProvider:()=>p,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>c});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),c=function(e){return function(t){var n=d(t.components);return r.createElement(e,a({},t,{components:n}))}},d=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(n),p=o,u=c["".concat(i,".").concat(p)]||c[p]||h[p]||a;return n?r.createElement(u,s(s({ref:t},m),{},{components:n})):r.createElement(u,s({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],s={id:"caching",title:"Caching"},l=void 0,m={unversionedId:"caching",id:"caching",title:"Caching",description:"Out of the box, Metro speeds up builds using a local cache of transformed modules. Thanks to this cache, Metro doesn't need to retransform modules unless the source code (or current configuration) has changed since the last time they were transformed.",source:"@site/../docs/Caching.md",sourceDirName:".",slug:"/caching",permalink:"/metro/docs/caching",draft:!1,editUrl:"https://github.com/facebook/metro/edit/main/docs/../docs/Caching.md",tags:[],version:"current",lastUpdatedAt:1696273341,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{id:"caching",title:"Caching"},sidebar:"docs",previous:{title:"Bundle Formats",permalink:"/metro/docs/bundling"},next:{title:"Module Resolution",permalink:"/metro/docs/resolution"}},c={},d=[{value:"Built-in cache stores",id:"built-in-cache-stores",level:2},{value:"Custom cache stores",id:"custom-cache-stores",level:2}],p={toc:d},u="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.mdx)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Out of the box, Metro speeds up builds using a ",(0,a.mdx)("strong",{parentName:"p"},"local cache")," of ",(0,a.mdx)("a",{parentName:"p",href:"/metro/docs/concepts#transformation"},"transformed")," modules. Thanks to this cache, Metro doesn't need to retransform modules unless the source code (or current configuration) has changed since the last time they were transformed."),(0,a.mdx)("p",null,"Metro also has the ability to use a ",(0,a.mdx)("strong",{parentName:"p"},"remote cache"),". This can dramatically speed up builds for larger teams and/or larger codebases by reducing the amount of time spent locally building remote changes even further. For example, this is how we use Metro to build React Native apps at Meta (a codebase with many thousands of files and hundreds of daily active engineers)."),(0,a.mdx)("p",null,"A typical setup for a remote cache involves:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"A storage backend specific to your team (e.g. ",(0,a.mdx)("a",{parentName:"li",href:"https://internalfb.com/S3"},"S3")," bucket)."),(0,a.mdx)("li",{parentName:"ol"},"Running ",(0,a.mdx)("a",{parentName:"li",href:"/metro/docs/cli#build-entry"},(0,a.mdx)("inlineCode",{parentName:"a"},"metro build"))," periodically (e.g. in a CI job) to populate the cache, using ",(0,a.mdx)("inlineCode",{parentName:"li"},"HttpStore")," (or a custom read/write cache store) in your Metro config."),(0,a.mdx)("li",{parentName:"ol"},"Configuring Metro on your development machines to read from the cache, using ",(0,a.mdx)("inlineCode",{parentName:"li"},"HttpGetStore")," (or a custom read-only cache store) in your Metro config.")),(0,a.mdx)("p",null,"The main option for configuring the Metro cache is ",(0,a.mdx)("a",{parentName:"p",href:"/metro/docs/configuration#cachestores"},(0,a.mdx)("inlineCode",{parentName:"a"},"cacheStores")),". Typically, the local cache (e.g. ",(0,a.mdx)("inlineCode",{parentName:"p"},"FileStore"),") should be listed first, followed by the remote cache (e.g. ",(0,a.mdx)("inlineCode",{parentName:"p"},"HttpCache"),")."),(0,a.mdx)("h2",{id:"built-in-cache-stores"},"Built-in cache stores"),(0,a.mdx)("p",null,"Metro provides a number of built-in cache store implementations for use with the ",(0,a.mdx)("a",{parentName:"p",href:"/metro/docs/configuration#cachestores"},(0,a.mdx)("inlineCode",{parentName:"a"},"cacheStores"))," config option:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"strong"},"FileStore({root: string})"))," will store cache entries as files under the directory specified by ",(0,a.mdx)("inlineCode",{parentName:"li"},"root"),"."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"strong"},"AutoCleanFileStore()"))," is a ",(0,a.mdx)("inlineCode",{parentName:"li"},"FileStore")," that periodically cleans up old entries. It accepts the same options as ",(0,a.mdx)("inlineCode",{parentName:"li"},"FileStore")," plus the following:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"strong"},"options.intervalMs: number"))," is the time in milliseconds between cleanup attempts. Defaults to 10 minutes."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"strong"},"options.cleanupThresholdMs: number"))," is the minimum time in milliseconds since the last modification of an entry before it can be deleted. Defaults to 3 days."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"strong"},"HttpStore(options)"))," is a bare-bones remote cache client that reads (",(0,a.mdx)("inlineCode",{parentName:"li"},"GET"),") and writes (",(0,a.mdx)("inlineCode",{parentName:"li"},"PUT"),") compressed cache artifacts over HTTP or HTTPS.",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"strong"},"options.endpoint: string"))," is the base URL for the cache server. For example, an ",(0,a.mdx)("inlineCode",{parentName:"li"},"HttpStore")," with ",(0,a.mdx)("inlineCode",{parentName:"li"},"'http://www.example.com/endpoint'")," as the endpoint would issue requests to URLs such as ",(0,a.mdx)("inlineCode",{parentName:"li"},"http://www.example.com/endpoint/c083bff944879d9f528cf185eba0f496bc10a47d"),"."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"strong"},"options.timeout: number"))," is the timeout for requests to the cache server, in milliseconds. Defaults to 5000."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"strong"},"options.family: 4 | 6"))," is the same as the ",(0,a.mdx)("inlineCode",{parentName:"li"},"family")," parameter to Node's ",(0,a.mdx)("a",{parentName:"li",href:"https://nodejs.org/api/http.html#httprequesturl-options-callback"},(0,a.mdx)("inlineCode",{parentName:"a"},"http.request")),"."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"strong"},"options.cert"),", ",(0,a.mdx)("inlineCode",{parentName:"strong"},"options.ca"),", ",(0,a.mdx)("inlineCode",{parentName:"strong"},"options.key")),": HTTPS options passed directly to ",(0,a.mdx)("a",{parentName:"li",href:"https://nodejs.org/api/https.html"},"Node's built-in HTTPS client"),"."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"strong"},"HttpGetStore(options)"))," is a read-only version of ",(0,a.mdx)("inlineCode",{parentName:"li"},"HttpStore"),".")),(0,a.mdx)("p",null,"You can import these classes from the ",(0,a.mdx)("inlineCode",{parentName:"p"},"metro-cache")," package or get them through the function form of ",(0,a.mdx)("inlineCode",{parentName:"p"},"cacheStores"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"// metro.config.js\nconst os = require('node:os');\nconst path = require('node:path');\n\nmodule.exports = {\n  cacheStores: ({ FileStore }) => [\n    new FileStore({\n      root: path.join(os.tmpdir(), 'metro-cache'),\n    }),\n  ],\n};\n\n")),(0,a.mdx)("h2",{id:"custom-cache-stores"},"Custom cache stores"),(0,a.mdx)("p",null,"To implement a custom cache store, pass an instance of a class with the following interface into ",(0,a.mdx)("a",{parentName:"p",href:"/metro/docs/configuration#cachestores"},(0,a.mdx)("inlineCode",{parentName:"a"},"cacheStores")),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-flow"},"interface CacheStore<T: Buffer | JsonSerializable> {\n  // Read an entry from the cache. Returns `null` if not found.\n  get(key: Buffer): ?T | Promise<?T>;\n\n  // Write an entry to the cache (if writable) or do nothing (if read-only)\n  set(key: Buffer, value: T): void | Promise<void>;\n\n  // Clear the cache (if possible) or do nothing\n  clear(): void | Promise<void>;\n}\n\ntype JsonSerializable = /* Any JSON-serializable value */;\n")),(0,a.mdx)("p",null,"The value of a cache entry is either an instance of ",(0,a.mdx)("a",{parentName:"p",href:"https://nodejs.org/api/buffer.html#buffer"},(0,a.mdx)("inlineCode",{parentName:"a"},"Buffer"))," or a JSON-serializable value (with unspecified internal structure in both cases). For a given cache key, ",(0,a.mdx)("inlineCode",{parentName:"p"},"get()")," ",(0,a.mdx)("em",{parentName:"p"},"must")," return the same type of value that was originally provided to ",(0,a.mdx)("inlineCode",{parentName:"p"},"set()"),"."))}h.isMDXComponent=!0}}]);