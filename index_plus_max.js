/**------【①.谋而后定：配置区】-----**/

'use strict';
const ACCOUNT = { //账号相关，安全性更高

    "user": "admin", //博客后台用户名
    "password": "cfblog-plus", //博客后台密码
    "third_token": "cfblog", //开放token，当前仅允许访问/admin/search.xml，/admin/sitemap.xml时可用，在cfblog_token的头信息中传递
    "cacheZoneId": "935xxxxxxxxxxxx",//区域 ID
    "cacheToken": "AQxxxxxxxx",//API token

    "kv_var": this['CFBLOG'],//workers绑定kv时用的变量名
}

const OPT = { //网站配置 - 内部仅用于声明,文件级真正消费者使用下方 6 个冻结 slice 与派生扁平 OPT

    /*--前台参数--*/
    "siteDomain": "域名",// 域名(不带https 也不带/)
    "siteName": "CFBLOG-Plus",//博客名称
    "siteDescription": "CFBLOG-Plus",//博客描述
    "keyWords": "cloudflare,KV,workers,blog",//关键字
    "logo": "https://cdn.jsdmirror.com/gh/TAIY2020/cfblog-plus@latest/themes/JustNews/files/logo2.png",//JustNews主题的logo

    "theme_github_path": "https://cdn.jsdmirror.com/gh/TAIY2020/cfblog-plus@latest/themes/",//主题路径
    "themeURL": "https://raw.githubusercontent.com/TAIY2020/cfblog-plus/master/themes/JustNews/", // 模板地址,以 "/"" 结尾
    //"search_xml_url":"", //search.xml外部链接，可通过github的action自动生成，不设置则实时生成
    //"sitemap_xml_url":"", //sitemap.xml外部链接，可通过github的action自动生成，不设置则实时生成

    "pageSize": 5,//每页文章数
    "recentlySize": 6,//最近文章数
    "recentlyType": 1,//最近文章类型：1-按创建时间倒序（按id倒序），2-按修改时间排序
    "readMoreLength": 150,//阅读更多截取长度
    "cacheTime": 60 * 60 * 24 * 2, //文章在浏览器的缓存时长(秒),建议=文章更新频率
    "html404": `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>404</title><style>body{margin:0;background:#000;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center}pre{color:#33ff33;font:16px/16px monospace}font{color:#5599ff}body::after{content:"404 | 页面走丢了";color:#33ff33;font:30px monospace;margin-top:10px;opacity:.8}</style></head><body><script>
eval(z='p="<"+"pre>"/* ,.oq#+     ,._, */;for(y in n="zw24l6k\\
4e3t4jnt4qj24xh2 x/* =<,m#F^    A W###q. */42kty24wrt413n243n\\
9h243pdxt41csb yz/* #K       q##H######Am */43iyb6k43pk7243nm\\
r24".split(4)){/* dP      cpq#q##########b, */for(a in t=pars\\
eInt(n[y],36)+/*         p##@###YG=[#######y */(e=x=r=[]))for\\
(r=!r,i=0;t[a/*         d#qg \`*PWo##q#######D */]>i;i+=.05)wi\\
th(Math)x-= /*        aem1k.com Q###KWR#### W[ */.05,0<cos(o=\\
new Date/1e3/*      .Q#########Md#.###OP  A@ , */-x/PI)&&(e[~\\
~(32*sin(o)*/* ,    (W#####Xx######.P^     T % */sin(.5+y/7))\\
+60] =-~ r);/* #y    \`^TqW####P###BP           */for(x=0;122>\\
x;)p+="   *#"/* b.        OQ####x#K           */[e[x++]+e[x++\\
]]||(S=("eval"/* l         \`X#####D  ,       */+"(z=\\'"+z.spl\\
it(B = "\\\\\\\\")./*           G####B" #       */join(B+B).split\\
(Q="\\'").join(B+Q/*          VQBP\`        */)+Q+")//m1k")[x/2\\
+61*y-1]).fontcolor/*         TP         */(/\\\\w/.test(S)&&"#\\
03B");document.body.innerHTML=p+=B+"\\\\n"}setTimeout(z)')//
</script></body></html>`,//404页面代码 - aem1k旋转地球动画
    "codeBeforHead": `
    <link rel="icon" type="image/x-icon" href="https://cdn.jsdmirror.com/gh/TAIY2020/cfblog-plus@latest/themes/wtt-blog/files/favicon.ico" />
    <link rel="Shortcut Icon" href="https://cdn.jsdmirror.com/gh/TAIY2020/cfblog-plus@latest/themes/wtt-blog/files/favicon.ico">
    <script src="https://npm.webcache.cn/jquery@3.7.1/dist/jquery.min.js"></script>
    `,//其他代码,显示在</head>前
    "codeBeforBody": `
    <script>
        // 添加社交媒体图标
        $('.footer-sns').html(\`
        <a href="https://space.bilibili.com/xxxxxxxxx" target="_blank" rel="nofollow">
            <i class="sns-icon fa-brands fa-bilibili"></i>
        </a>
        <a href="https://github.com/你的用户名" target="_blank" rel="nofollow">
            <i class="sns-icon fa-brands fa-github"></i>
        </a>
        <a href="mailto:你的邮箱@example.com" target="_blank" rel="nofollow">
            <i class="sns-icon fa fa-envelope"></i>
        </a>
        \`);

        // 动态生成版权信息和运行时间
        var startYear = 2024; // 修改为你的网站创建年份
        var currentYear = new Date().getFullYear();
        var yearRange = startYear === currentYear ? startYear : startYear + '-' + currentYear;

        function showRunTime() {
            var start = new Date('2024/01/01 00:00:00'); // 修改为你的网站创建日期
            var now = new Date();
            var diff = now - start;
            var days = Math.floor(diff / (1000 * 60 * 60 * 24));
            var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((diff % (1000 * 60)) / 1000);
            $('#runTime').html('本站已运行 ' + days + ' 天 ' + hours + ' 小时 ' + minutes + ' 分 ' + seconds + ' 秒');
        }

        $('.footer .copyright p').html(\`
            Copyright © \${yearRange} TaiYang<br>
            <span id="runTime">加载中...</span><br>
            Powered by <a href="https://www.cloudflare.com">Cloudflare</a> & <a href="https://blog.arrontg.cf">CFBlog-Plus</a> & <a href="https://blog.gezhong.vip">CF-Blog</a>
        \`);

        showRunTime();
        setInterval(showRunTime, 1000);
    </script>
    `,//其他代码,显示在</body>前
    "commentCode": `
    <script>
        //文章浏览页 添加编辑直达功能
        $(".entry-info").append('<a style="float:right;margin-left:5px;" href="'+location.href.replace('/article/','/admin/edit/')+'" target="_blank">编辑</a>')
    </script>
    `,//评论区代码
    "widgetOther": `
    `,//20201224新增参数,用于右侧 小部件扩展
    "otherCodeA": `热度`,//模板开发用的其他自定义变量
    "otherCodeB": ``,//
    "otherCodeC": ``,//
    "otherCodeD": ``,//
    "otherCodeE": ``,//
    "copyRight": ``,//自定义版权信息,建议保留大公无私的 Coudflare 和 作者 的链接
    "robots": `User-agent: *
    Disallow: /admin`,//robots.txt设置

    /*--前后台共用参数--*/

    "top_flag": `<topflag>[置顶]</topflag>`,//置顶标志
    "top_flag_style": `<style>topflag {color:#ff5722}</style>`,//置顶标志的样式


    /*--后台参数--*/

    "hidden_flag": `<hiddenflag>[隐藏]</hiddenflag>`,//隐藏标志
    "hidden_flag_style": `<style>hiddenflag {color:#000000;background-color: #ffff00;}</style>`,//隐藏标志的样式

    "admin_home_idx": 1, //后台首页tab索引设置：1-我的文章,2-新建,3-设置,4-发布
    "editor_page_scripts": `
    //置顶设置
    let top_setting=\`
        <div class="form-group">
        <label for="exampleInputEmail2">是否置顶</label>
        <input type="hidden" class="form-control" id="top_timestamp" name="top_timestamp">
        <select class="form-control" id="istop" name="istop">
            <option value="0" selected >否</option>
            <option value="1" >是</option>
        </select>
    </div>\`
    $('form#addNewForm div.form-group,form#editForm div.form-group').last().after(top_setting);//新建和编辑页面添加置顶设置
    $("#istop").change(function(){
        $("#top_timestamp").val($(this).val()*1?new Date().getTime():0);
    });
    if(location.pathname.startsWith('/admin/edit')){//修改文章页面，自动设置置顶
        $("#istop").val(articleJson.top_timestamp?1:0);
        $("#top_timestamp").val(articleJson.top_timestamp?articleJson.top_timestamp:0);
    }
    $("#istop").trigger('change')
    //隐藏设置
    let hidden_setting=\`
        <div class="form-group">
        <label for="exampleInputEmail2">是否隐藏</label>
        <select class="form-control" id="hidden" name="hidden">
            <option value="0" selected >否</option>
            <option value="1" >是</option>
        </select>
    </div>\`
    $('form#addNewForm div.form-group,form#editForm div.form-group').last().after(hidden_setting);//新建和编辑页面添加隐藏设置
    if(location.pathname.startsWith('/admin/edit')){//修改文章页面，自动设置隐藏
        $("#hidden").val(articleJson.hidden?1:0);
    }
    let sitemapxml=\`<a  tabindex="0"  role="button"  type="submit" id="btn_export" class="btn btn-default"  href="/admin/sitemap.xml" >导出sitemap.xml</a>\`
    $('form#importForm a').last().after(sitemapxml);//设置页面添加导出sitemap.xml导出按钮
    let searchxml=\`<a  tabindex="0"  role="button"  type="submit" id="btn_export" class="btn btn-default"  href="/admin/search.xml" >导出search.xml</a>\`
    $('form#importForm a').last().after(searchxml);//设置页面添加导出search.xml导出按钮

    //关闭email匹配和@匹配，否则图片使用jsdelivr的cdn，如果有版本号会匹配成“mailto:xxx”从而导致显示异常
    mdEditor.settings.emailLink=false;
    mdEditor.settings.atLink=false;

    mdEditor.settings.toc=false
    mdEditor.settings.tocm=true  // Using [TOCM]
    mdEditor.settings.tocContainer="#custom-toc-container" // 自定义 ToC 容器层
    mdEditor.settings.gfm=false
    mdEditor.settings.tocDropdown=true
    mdEditor.settings.markdownSourceCode=true // 是否保留 Markdown 源码，即是否删除保存源码的 Textarea 标签
    mdEditor.settings.emoji=true
    //修复 editor.md 默认 emoji 图片路径为 HTTPS
    if(typeof editormd !== "undefined"){
        editormd.emoji = editormd.emoji || {};
        editormd.emoji.path = "https://npm.webcache.cn/emojify.js@1.1.0/dist/images/basic/";
    }
    mdEditor.settings.taskList=true;// 默认不解析
    mdEditor.settings.tex=true;// 默认不解析
    mdEditor.settings.flowChart=true; // 默认不解析
    mdEditor.settings.sequenceDiagram=true;// 默认不解析

    //开启全局html标签解析-不推荐
    //mdEditor.settings.htmlDecode=true;

    window.mdEditor=mdEditor;
    //editormd工具栏上添加html标签解析开关
    mdEditor.getToolbarHandles().parseHtml=function(){
    let ele = $(".editormd-menu li a i:last");
    if(ele.hasClass('fa-toggle-off')){
        ele.removeClass('fa-toggle-off').addClass('fa-toggle-on');
        mdEditor.settings.htmlDecode = true;
    }else if(ele.hasClass('fa-toggle-on')){
        ele.removeClass('fa-toggle-on').addClass('fa-toggle-off')
        mdEditor.settings.htmlDecode = false;
    }
    mdEditor.setMarkdown(mdEditor.getMarkdown());
    }
    setTimeout(function(){
        $(".editormd-menu").append('<li class="divider" unselectable="on">|</li><li><a href="javascript:;" title="解析HTML标签" unselectable="on"><i class="fa fa-toggle-off" name="parseHtml" unselectable="on"> 解析HTML标签 </i></a></li>')
        mdEditor.setToolbarHandler(mdEditor.getToolbarHandles())
    },300)

    // 修复 emoji 对话框点击无法插入的问题（原插件用 .bind() 绑定动态加载的元素导致失效）
    $(document).on('click', '.editormd-emoji-btn', function() {
        $(this).toggleClass('selected');
    });
    $(document).on('mousedown', '.editormd-emoji-dialog button:first', function() {
        var vals = [];
        $('.editormd-emoji-btn.selected').each(function() {
            vals.push($(this).attr('value'));
        });
        if (vals.length > 0 && window.mdEditor) {
            window.mdEditor.cm.replaceSelection(vals.join(' '));
            $('.editormd-emoji-btn').removeClass('selected');
        }
    });

    //默认图片，工具：https://tool.lu/imageholder/
    if($('#img').val()=="")$('#img').val('https://cdn.jsdmirror.com/gh/Arronlong/cdn@master/cfblog/cfblog-plus.png');
    //默认时间设置为当前时间
    if($('#createDate').val()=="")$('#createDate').val(new Date(new Date().getTime()+8*60*60*1000).toJSON().substr(0,16));
    `, //后台编辑页面脚本

};

//---对部分配置进行处理---见 ADR-0003: OPT 整体与 6 个 slice 在 normalize 后冻结
{
    //CFBLOG 通用变量
    this.CFBLOG = ACCOUNT.kv_var;

    //默认为非私密博客
    if (null == OPT.privateBlog) {
        OPT.privateBlog = false;
    }
    //处理themeURL、theme_github_path参数设定
    if (OPT.themeURL.substr(-1) != '/') {
        OPT.themeURL = OPT.themeURL + '/';
    }
    if (OPT.theme_github_path.substr(-1) != '/') {
        OPT.theme_github_path = OPT.theme_github_path + '/';
    }
    //置顶样式 top_flag_style → codeBeforHead 的派生由 Theme module 接手(themes.resolve.effectiveCodeBeforHead)

    //--- 见 ADR-0003: 切为 6 个冻结 slice + 冻结扁平 OPT ---
    Object.freeze(OPT);
}

//站点元(SEO / 站点名 / logo / 版权)
const siteConfig = Object.freeze({
    siteDomain: OPT.siteDomain,
    siteName: OPT.siteName,
    siteDescription: OPT.siteDescription,
    keyWords: OPT.keyWords,
    logo: OPT.logo,
    copyRight: OPT.copyRight,
});

//主题(URL 解析 / admin 编辑器脚本注入)
const themeConfig = Object.freeze({
    theme_github_path: OPT.theme_github_path,
    themeURL: OPT.themeURL,
    editor_page_scripts: OPT.editor_page_scripts,
});

//前台列表 / 分页 / 近期文章
const listingConfig = Object.freeze({
    pageSize: OPT.pageSize,
    recentlySize: OPT.recentlySize,
    recentlyType: OPT.recentlyType,
});

//Article 装饰视图(置顶/隐藏 flag + 摘要长度)
const articleViewConfig = Object.freeze({
    top_flag: OPT.top_flag,
    top_flag_style: OPT.top_flag_style,
    hidden_flag: OPT.hidden_flag,
    hidden_flag_style: OPT.hidden_flag_style,
    readMoreLength: OPT.readMoreLength,
});

//内嵌进模板的代码片段
const embedsConfig = Object.freeze({
    codeBeforHead: OPT.codeBeforHead,
    codeBeforBody: OPT.codeBeforBody,
    commentCode: OPT.commentCode,
    widgetOther: OPT.widgetOther,
    otherCodeA: OPT.otherCodeA,
    otherCodeB: OPT.otherCodeB,
    otherCodeC: OPT.otherCodeC,
    otherCodeD: OPT.otherCodeD,
    otherCodeE: OPT.otherCodeE,
});

//运行时(缓存/权限/admin 首页 tab/robots/404/feed url)
const runtimeConfig = Object.freeze({
    cacheTime: OPT.cacheTime,
    privateBlog: OPT.privateBlog,
    admin_home_idx: OPT.admin_home_idx,
    robots: OPT.robots,
    html404: OPT.html404,
    search_xml_url: OPT.search_xml_url,
    sitemap_xml_url: OPT.sitemap_xml_url,
});

/**------【②.articles 模块：Article 持久化 + 装饰 + 派生 WidgetTags】-----**/

// Article 仓储工厂闭包；见 CONTEXT.md 中的 Article / Decorated Article / articles 定义。
function createArticleRepo({ kv, view }) {
    const KEY_INDEX_LIST = "SYSTEM_INDEX_LIST";
    const KEY_INDEX_NUM = "SYSTEM_INDEX_NUM";
    const KEY_WIDGET_TAGS = "SYSTEM_VALUE_WidgetTags";

    function _padId(n) { return ("00000" + parseInt(n)).substr(-6); }

    async function _kvGetJson(key, defaultValue) {
        const raw = await kv.get(key);
        if (raw == null) return defaultValue;
        try { return JSON.parse(raw); } catch (e) { return defaultValue; }
    }
    async function _kvPutJson(key, obj) {
        await kv.put(key, typeof obj === "string" ? obj : JSON.stringify(obj));
    }

    function _pad2(n) { return n >= 0 && n <= 9 ? "0" + n : String(n); }
    function _modifyDate16(ts) {
        const d = new Date(ts);
        return d.getFullYear() + "-" + _pad2(d.getMonth() + 1) + "-" + _pad2(d.getDate())
            + " " + _pad2(d.getHours()) + ":" + _pad2(d.getMinutes());
    }

    // 与原 processArticleProp / getRecentlyArticles / admin_nextPage 三处合一
    // mode: "front" | "admin" | "none"
    function _decorate(a, mode) {
        if (!a || mode === "none") return a;
        const out = Object.assign({}, a);
        if (out.top_timestamp && !String(out.title).startsWith(view.top_flag)) {
            out.title = view.top_flag + out.title;
        }
        if (mode === "admin" && out.hidden && !String(out.title).startsWith(view.hidden_flag)) {
            out.title = view.hidden_flag + out.title;
        }
        const createDate = out.createDate || "";
        out.createDate10 = createDate.substr(0, 10);
        out.createDate16 = createDate.substr(0, 16);
        out.createDateYear = createDate.substr(0, 4);
        out.contentLength = out.contentHtml
            ? out.contentHtml.replace(/<\/?[^>]*>/g, "").replace(/&[a-zA-Z0-9#]+;/g, " ").replace(/\s+/g, "").length
            : (out.contentText ? out.contentText.length : 0);
        out.url = "/article/" + out.id + "/" + out.link + ".html";
        if (out.modify_timestamp) out.modifyDate16 = _modifyDate16(out.modify_timestamp);
        return out;
    }

    // 排序：top_timestamp 倒序优先,然后 id 倒序(等价于原 sortArticle)
    function _sortByTopThenId(list) {
        return list.sort(function (m, n) {
            const at = m.top_timestamp || 0, bt = n.top_timestamp || 0;
            if (at !== bt) return bt - at;
            return m.id < n.id ? 1 : (m.id > n.id ? -1 : 0);
        });
    }

    async function _allMeta() {
        return await _kvGetJson(KEY_INDEX_LIST, []);
    }
    async function _saveMeta(list) {
        await _kvPutJson(KEY_INDEX_LIST, list);
    }
    async function _nextId() {
        const cur = await _kvGetJson(KEY_INDEX_NUM, null);
        const next = (cur == null || cur === "" || cur === "[]") ? 1 : (parseInt(cur) + 1);
        await _kvPutJson(KEY_INDEX_NUM, next);
        return _padId(next);
    }
    async function _rebuildFacets(meta) {
        // 仅 WidgetTags 是 articles 的派生视图;WidgetCategory 由 admin 直接编辑,不在此处重建
        const tagSet = [];
        for (let i = 0; i < meta.length; i++) {
            const arr = meta[i].tags;
            if (Array.isArray(arr)) {
                for (let j = 0; j < arr.length; j++) {
                    const t = arr[j];
                    if (t && t.length > 0 && tagSet.indexOf(t) === -1) tagSet.push(t);
                }
            }
        }
        await _kvPutJson(KEY_WIDGET_TAGS, tagSet);
    }

    // ---------- 读 ----------
    async function get(id) {
        const a = await _kvGetJson(_padId(id), null);
        return a ? _decorate(a, "front") : null;
    }
    async function getRaw(id) {
        return await _kvGetJson(_padId(id), null);
    }
    async function list(opts) {
        opts = opts || {};
        const decorate = opts.decorate || "front";
        const includeHidden = opts.includeHidden === true;
        let items = await _allMeta();
        if (!includeHidden) items = items.filter(a => !a.hidden);
        if (opts.category) items = items.filter(a => a.category && a.category.indexOf(opts.category) !== -1);
        if (opts.tag) items = items.filter(a => a.tags && a.tags.indexOf(opts.tag) !== -1);

        if (opts.sort === "modified") {
            items = items.slice().sort((a, b) => (b.modify_timestamp || 0) - (a.modify_timestamp || 0));
        } else if (opts.sort === "created") {
            items = items.slice().sort((a, b) => (a.id < b.id ? 1 : a.id > b.id ? -1 : 0));
        } else {
            items = _sortByTopThenId(items.slice());
        }

        const total = items.length;
        let page = opts.page || 1;
        let pageSize = opts.pageSize;
        if (typeof opts.limit === "number") {
            items = items.slice(0, opts.limit);
        } else if (typeof pageSize === "number" && pageSize > 0) {
            items = items.slice((page - 1) * pageSize, page * pageSize);
        }

        return {
            items: items.map(a => _decorate(a, decorate)),
            total: total,
            page: page,
            pageCount: pageSize ? Math.ceil(total / pageSize) : 1,
        };
    }
    async function siblings(id) {
        const padded = _padId(id);
        const visible = _sortByTopThenId((await _allMeta()).filter(a => !a.hidden));
        const idx = visible.findIndex(a => a.id === padded);
        const raw = await _kvGetJson(padded, null);
        if (!raw) return { prev: null, current: null, next: null };
        return {
            prev: idx > 0 ? _decorate(visible[idx - 1], "front") : null,
            current: _decorate(raw, "front"),
            next: (idx >= 0 && idx < visible.length - 1) ? _decorate(visible[idx + 1], "front") : null,
        };
    }
    async function tags() {
        return await _kvGetJson(KEY_WIDGET_TAGS, []);
    }

    // ---------- 写 ----------
    async function save(input) {
        const isNew = !input.id;
        const id = isNew ? await _nextId() : _padId(input.id);
        const now = new Date().getTime() + 8 * 60 * 60 * 1000;

        const contentMD = input.contentMD || "";
        const contentHtml = input.contentHtml || "";
        const contentText = contentHtml.replace(/<\/?[^>]*>/g, "").trim().substring(0, view.readMoreLength);

        const article = {
            id: id,
            title: input.title,
            img: input.img,
            link: input.link,
            createDate: input.createDate,
            category: input.category,
            tags: input.tags,
            contentMD: contentMD,
            contentHtml: contentHtml,
            contentText: contentText,
            priority: input.priority == null ? "0.5" : input.priority,
            top_timestamp: (input.top_timestamp * 1) || 0,
            modify_timestamp: now,
            hidden: (input.hidden * 1) || 0,
            changefreq: input.changefreq == null ? "daily" : input.changefreq,
        };
        await _kvPutJson(id, article);

        // 维护 index_list:剔除旧条目再追加新条目,然后排序回写
        const meta = (await _allMeta()).filter(a => a.id !== id);
        const metaItem = {
            id: id,
            title: article.title,
            img: article.img,
            link: article.link,
            createDate: article.createDate,
            category: article.category,
            tags: article.tags,
            contentText: contentText,
            priority: article.priority,
            top_timestamp: article.top_timestamp,
            modify_timestamp: article.modify_timestamp,
            hidden: article.hidden,
            changefreq: article.changefreq,
        };
        meta.push(metaItem);
        const sorted = _sortByTopThenId(meta);
        await _saveMeta(sorted);
        await _rebuildFacets(sorted);

        return _decorate(article, "front");
    }
    async function remove(id) {
        const padded = _padId(id);
        await kv.delete(padded);
        const filtered = (await _allMeta()).filter(a => a.id !== padded);
        await _saveMeta(filtered);
        await _rebuildFacets(filtered);
    }
    async function rebuildFacets() {
        await _rebuildFacets(await _allMeta());
    }

    return {
        get: get,
        getRaw: getRaw,
        list: list,
        siblings: siblings,
        tags: tags,
        save: save,
        delete: remove,
        rebuildFacets: rebuildFacets,
    };
}

// 文件级单例:注入 KV namespace 与 articleViewConfig slice(ADR-0003)
const articles = createArticleRepo({
    kv: CFBLOG,
    view: articleViewConfig,
});

/**------【②b.themes 模块:主题 URL 解析 + 模板 fetch + 页面壳子派生】-----**/

// Theme module 工厂闭包(候选 4)
function createThemeModule({ themeConfig, articleViewConfig, embedsConfig }) {
    //模块初始化时一次性派生(slice 全部冻结,派生值也常驻)
    const effectiveCodeBeforHead = (embedsConfig.codeBeforHead || '') + (articleViewConfig.top_flag_style || '');
    const effectiveCodeBeforBody = embedsConfig.codeBeforBody || '';
    const editorPageScripts = themeConfig.editor_page_scripts || '';

    //每请求一次:根据 ?theme= 选定 themeURL,封装请求作用域的主题信息
    function resolve(query) {
        const override = query && query.themeOverride;
        let themeURL = themeConfig.themeURL;
        let themeName = null;
        let overridden = false;
        if (override) {
            themeURL = themeConfig.theme_github_path + override + "/";
            themeName = override;
            overridden = true;
        }
        //default → default2.0 重定向
        if (themeConfig.theme_github_path + "default/" === themeURL) {
            themeURL = themeConfig.theme_github_path + "default2.0/";
            themeName = "default2.0";
        }
        return Object.freeze({
            themeURL: themeURL,
            themeName: themeName,
            overridden: overridden,
            effectiveCodeBeforHead: effectiveCodeBeforHead,
            effectiveCodeBeforBody: effectiveCodeBeforBody,
            editorPageScripts: editorPageScripts,
        });
    }

    //模板 fetch + editor_page_scripts 注入
    async function template(themeCtx, name) {
        const path = name.replace(".html", "");
        let html = await (await fetch(themeCtx.themeURL + path + ".html", { cf: { cacheTtl: 600 } })).text();
        if ("admin/index|admin/editor".includes(path)) {
            html = html.replace("$('#WidgetCategory').val(JSON.stringify(categoryJson))", themeCtx.editorPageScripts + "$('#WidgetCategory').val(JSON.stringify(categoryJson))");
        }
        return html;
    }

    return { resolve: resolve, template: template };
}

const themes = createThemeModule({
    themeConfig: themeConfig,
    articleViewConfig: articleViewConfig,
    embedsConfig: embedsConfig,
});

/**------【②.猎杀时刻：请求处理入口】-----**/

//监听请求
addEventListener("fetch", event => {
    //处理请求
    event.respondWith(handlerRequest(event))
})

// 处理请求 - dispatcher: 路由 → handler → Outcome → materialize → 应用路径相关 cache 策略
async function handlerRequest(event) {
    let request = event.request
    //获取url请求对象
    let url = new URL(request.url)
    let paths = url.pathname.trim("/").split("/")

    //校验权限(失败返回 401 Outcome,绕过边缘缓存)
    if (("admin" == paths[0] || true === OPT.privateBlog) && !parseBasicAuth(request)) {
        return materialize({
            kind: "text",
            body: "Unauthorized",
            status: 401,
            headers: {
                "WWW-Authenticate": 'Basic realm="cfblog"',
                "Access-Control-Allow-Origin": "*",
            },
        });
    }

    //组装请求url，查看是否有缓存
    const D = caches.default,
        M = "https://" + OPT.siteDomain + url.pathname,
        cacheKey = new Request(M, request);
    console.log("cacheFullPath:", M);
    const cached = await D.match(cacheKey);
    if (cached) {
        console.log("hit cache!")
        return cached;
    }

    //请求级 ThemeContext(候选 4):?theme= 由 themes.resolve 处理,不再突变 themeConfig
    const themeCtx = themes.resolve({ themeOverride: url.searchParams.get("theme") });

    //路由分发:每个 handler 返回 Outcome(见 ADR-0002),dispatcher 统一物化
    let outcome;
    switch (paths[0]) {
        case "favicon.ico":
            outcome = handle_favicon();
            break;
        case "robots.txt":
            outcome = handle_robots();
            break;
        case "sitemap.xml":
            outcome = await handle_sitemap(request);
            break;
        case "search.xml":
            outcome = await handle_search(request);
            break;
        case "admin":
            outcome = await handle_admin(request, themeCtx);
            break;
        case "article":
            outcome = await handle_article(paths[1], themeCtx);
            break;
        case "":
        case "page":
        case "category":
        case "tags":
            outcome = await renderBlog(url, themeCtx);
            break;
        default:
            outcome = { kind: "notFound" };
            break;
    }

    const response = materialize(outcome);

    //缓存策略:admin → no-store; 其余 → public+max-age + edge cache.put
    try {
        if ("admin" == paths[0]) {
            response.headers.set("Cache-Control", "no-store")
        } else {
            response.headers.set("Cache-Control", "public, max-age=" + OPT.cacheTime);
            event.waitUntil(D.put(cacheKey, response.clone()));
        }
    } catch (e) { }

    return response;
}

//Outcome → Response 物化(ADR-0002)
function materialize(outcome) {
    if (outcome.kind === "redirect") {
        const headers = Object.assign({ "location": outcome.to }, outcome.headers || {});
        return new Response("", { status: outcome.status || 302, headers: headers });
    }
    let body, contentType, status = outcome.status;
    switch (outcome.kind) {
        case "html":
            body = outcome.body;
            contentType = "text/html;charset=UTF-8";
            break;
        case "json":
            body = typeof outcome.body === "string" ? outcome.body : JSON.stringify(outcome.body);
            contentType = "application/json;charset=UTF-8";
            break;
        case "xml":
            body = outcome.body;
            contentType = "text/xml;charset=UTF-8";
            break;
        case "text":
            body = outcome.body;
            contentType = "text/plain;charset=UTF-8";
            break;
        case "file":
            body = outcome.content;
            contentType = "application/octet-stream;charset=utf-8";
            break;
        case "notFound":
            body = OPT.html404;
            contentType = "text/html;charset=UTF-8";
            status = status || 404;
            break;
        default:
            body = "Unknown outcome kind: " + outcome.kind;
            contentType = "text/plain;charset=UTF-8";
            status = status || 500;
    }
    if (status == null) status = 200;
    const headers = { "content-type": contentType };
    if (outcome.kind === "file") {
        headers["Content-Disposition"] = "attachment; filename=" + outcome.name;
    }
    if (outcome.headers) Object.assign(headers, outcome.headers);
    return new Response(body, { status: status, headers: headers });
}

/**------【③.分而治之：各种请求分开处理】-----**/

//访问: favicon.ico
function handle_favicon() {
    //返回 404 文本(实际 favicon 走 codeBeforHead 中自定义的 link rel="icon")
    return { kind: "text", body: "404", status: 404 };
}

//访问: robots.txt
function handle_robots() {
    return {
        kind: "text",
        body: OPT.robots + "\nSitemap: https://" + OPT.siteDomain + "/sitemap.xml",
    };
}

//访问: sitemap.xml
async function handle_sitemap(request) {
    let xml;
    if (OPT.sitemap_xml_url) {
        //cf代理方式
        let proxyUrl = new URL(request.url);
        proxyUrl.href = OPT.sitemap_xml_url.replace('cdn.jsdmirror.com/gh', 'raw.githubusercontent.com').replace('@', '/');
        const r = await fetch(new Request(proxyUrl, request));
        xml = await r.text();
    } else {
        xml = await buildSitemapXml();
    }
    return { kind: "xml", body: xml };
}

//组装 sitemap.xml(前台路由与 admin 下载共用)
async function buildSitemapXml() {
    const all = await articles.list({ sort: "top", decorate: "none" });
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    for (let i = 0; i < all.items.length; i++) {
        const a = all.items[i];
        xml += "\n\t<url>"
            + "\n\t\t<loc>https://" + OPT.siteDomain + "/article/" + a.id + "/" + a.link + ".html</loc>"
            + "\n\t\t<lastmod>" + (a.createDate || "").substr(0, 10) + "</lastmod>"
            + "\n\t\t<changefreq>" + (void 0 === a.changefreq ? "daily" : a.changefreq) + "</changefreq>"
            + "\n\t\t<priority>" + (void 0 === a.priority ? "0.5" : a.priority) + "</priority>"
            + "\n\t</url>";
    }
    xml += "\n</urlset>";
    return xml;
}

//访问: search.xml
async function handle_search(request) {
    let xml;
    if (OPT.search_xml_url) {
        let proxyUrl = new URL(request.url);
        proxyUrl.href = OPT.search_xml_url.replace('cdn.jsdmirror.com/gh', 'raw.githubusercontent.com').replace('@', '/');
        const r = await fetch(new Request(proxyUrl, request));
        xml = await r.text();
    } else {
        xml = await buildSearchXml();
    }
    return { kind: "xml", body: xml };
}

//组装 search.xml(前台路由与 admin 下载共用)
async function buildSearchXml() {
    const all = await articles.list({ sort: "top", decorate: "none" });
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<blogs>';
    for (let i = 0; i < all.items.length; i++) {
        const a = all.items[i];
        xml += "\n\t<blog>"
            + "\n\t\t<title>" + a.title + "</title>";
        const full = await articles.getRaw(a.id);
        if (full != null && full.contentMD) {
            xml += "\n\t\t<content>" + full.contentMD.replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('&', '&amp;') + "</content>";
        }
        xml += "\n\t\t<url>https://" + OPT.siteDomain + "/article/" + a.id + "/" + a.link + ".html</url>"
            + "\n\t\t<time>" + (a.createDate || "").substr(0, 10) + "</time>"
            + "\n\t</blog>";
    }
    xml += "\n</blogs>";
    return xml;
}

//渲染前端博客：指定一级路径page\tags\category，二级路径value，以及页码，默认第一页
async function renderBlog(url, themeCtx) {
    console.log("---进入renderBlog函数---，path=", url.href.substr(url.origin.length))

    //?pageSize= 仅作用于本次请求,不动 listingConfig
    const pageSizeOverride = url.searchParams.get("pageSize");
    const effectivePageSize = pageSizeOverride ? parseInt(pageSizeOverride) : OPT.pageSize;
    console.log("theme pageSize", effectivePageSize, themeCtx.themeURL)

    //获取主页模板源码、widgets
    let theme_html = await themes.template(themeCtx, "index"),
        menus = await getWidgetMenu(),
        categoryWidget = await getWidgetCategory(),
        tagsWidget = await getWidgetTags(),
        links = await getWidgetLink();

    //解析路由,组装 articles.list 查询参数
    let paths = url.pathname.trim("/").split("/")
    let listOpts = { sort: "top", decorate: "front", page: 1, pageSize: effectivePageSize };
    switch (paths[0] || "page") {
        case "page":
            listOpts.page = parseInt(paths[1] || 1);
            break;
        case "tags":
        case "category":
            let category_tag = paths.slice(1).join("");
            if (paths.length > 3 && paths.includes("page")) {
                listOpts.page = parseInt(paths[paths.indexOf("page") + 1]);
                //slice end 是 exclusive,直接取到 "page" 索引即可;原代码多减了 1 会丢一段
                category_tag = paths.slice(1, paths.lastIndexOf("page")).join("");
            }
            category_tag = decodeURIComponent(category_tag);
            listOpts[paths[0] === "tags" ? "tag" : "category"] = category_tag;
            break;
    }

    const listed = await articles.list(listOpts);
    const recent = (await articles.list({
        sort: OPT.recentlyType == 2 ? "modified" : "top",
        limit: OPT.recentlySize,
        decorate: "front",
    })).items;

    //上一页/下一页 URL
    let url_prefix = url.pathname.replace(/(.*)\/page\/\d+/, '$1/')
    if (url_prefix.substr(-1) == '/') {
        url_prefix = url_prefix.substr(0, url_prefix.length - 1);
    }
    const pageNo = listed.page;
    let newer = (pageNo === 1) ? [] : [{ title: "上一页", url: url_prefix + "/page/" + (pageNo - 1) }];
    let older = (pageNo >= listed.pageCount) ? [] : [{ title: "下一页", url: url_prefix + "/page/" + (pageNo + 1) }];

    //组装渲染上下文。cfg.OPT 在扁平 OPT 之上叠加 themeCtx 的页面壳子派生(候选 4)
    let title = (pageNo > 1 ? "page " + pageNo + " - " : "") + OPT.siteName;
    let cfg = {
        widgetMenuList: menus,
        widgetCategoryList: categoryWidget,
        widgetTagsList: tagsWidget,
        widgetLinkList: links,
        widgetRecentlyList: recent,
        articleList: listed.items,
        pageNewer: newer,
        pageOlder: older,
        title: title,
        keyWords: OPT.keyWords,
        OPT: Object.assign({}, OPT, {
            codeBeforHead: themeCtx.effectiveCodeBeforHead,
            codeBeforBody: themeCtx.effectiveCodeBeforBody,
        }),
    };

    let html = Mustache.render(theme_html, cfg)

    return { kind: "html", body: html };
}

//渲染前端博客的文章内容页
async function handle_article(id, themeCtx) {
    //获取内容页模板源码与 widgets
    let theme_html = await themes.template(themeCtx, "article"),
        menus = await getWidgetMenu(),
        categoryWidget = await getWidgetCategory(),
        tagsWidget = await getWidgetTags(),
        links = await getWidgetLink();

    const recent = (await articles.list({
        sort: OPT.recentlyType == 2 ? "modified" : "top",
        limit: OPT.recentlySize,
        decorate: "front",
    })).items;

    //获取上篇、本篇、下篇文章
    const sib = await articles.siblings(id);
    let article = sib.current;

    //文章不存在时返回404页面
    if (!article) {
        return { kind: "notFound" };
    }

    //修复旧文章中 emoji 图片的 HTTP 混合内容问题
    if (article.contentHtml) {
        article.contentHtml = article.contentHtml.replaceAll('http://www.emoji-cheat-sheet.com/graphics/emojis/', 'https://npm.webcache.cn/emojify.js@1.1.0/dist/images/basic/');
    }

    //SEO title 用未拼前缀的版本
    let title = article.title.replace(nullToEmpty(OPT.top_flag), '').replace(nullToEmpty(OPT.hidden_flag), '') + " - " + OPT.siteName,
        keyWord = article.tags.concat(article.category).join(",");

    //注意: 原模板用 articleOlder/articleNewer 命名,但在 top+id 倒序排序下,
    //sib.prev(更靠前的索引)其实是"更新的那篇",sib.next 是"更旧的那篇"。
    //保持与既有主题模板兼容,这里按原约定映射。
    let cfg = {
        widgetMenuList: menus,
        widgetCategoryList: categoryWidget,
        widgetTagsList: tagsWidget,
        widgetLinkList: links,
        widgetRecentlyList: recent,
        articleOlder: sib.prev ? [sib.prev] : [],
        articleSingle: article,
        articleNewer: sib.next ? [sib.next] : [],
        title: title,
        keyWords: keyWord,
        OPT: Object.assign({}, OPT, {
            codeBeforHead: themeCtx.effectiveCodeBeforHead,
            codeBeforBody: themeCtx.effectiveCodeBeforBody,
        }),
    };

    let html = Mustache.render(theme_html, cfg)

    return { kind: "html", body: html };
}

//后台请求处理:基于 ADMIN_ACTIONS 集中表的 dispatcher(候选 2)
async function handle_admin(request, themeCtx) {
    const url = new URL(request.url);
    const paths = url.pathname.trim("/").split("/");
    const ctx = { request: request, paths: paths, themeCtx: themeCtx, query: url.searchParams };
    //paths[0]==="admin",paths[1] 是 action 名,paths[2..] 是 action 参数
    const actionName = paths.length === 1 ? "" : paths[1];
    const action = ADMIN_ACTIONS[actionName];
    if (!action) {
        return { kind: "json", body: '{"msg":"some errors","rst":false}' };
    }
    return await action(ctx, ...paths.slice(2));
}

//--- admin actions: (ctx, ...pathSegments) → Outcome ---

//admin 首页(/admin 或 /admin/list):渲染 admin/index 模板,叠加首页 tab 与置顶/隐藏样式
async function adminList(ctx) {
    let theme_html = await themes.template(ctx.themeCtx, "admin/index");
    const categoryJson = await getWidgetCategory();
    const menuJson = await getWidgetMenu();
    const linkJson = await getWidgetLink();

    let html = theme_html.replaceHtmlPara("categoryJson", JSON.stringify(categoryJson))
        .replaceHtmlPara("menuJson", JSON.stringify(menuJson))
        .replaceHtmlPara("linkJson", JSON.stringify(linkJson));

    if (OPT.admin_home_idx && OPT.admin_home_idx >= 1 && OPT.admin_home_idx <= 4) {
        html = html.replace("$('#myTab li:eq(0) 1').tab('show')", "$($('#myTab a[href*=\"'+location.hash+'\"]')[0]||$('#myTab a:eq(" + OPT.admin_home_idx + ")')).tab('show')");
    }
    //admin 列表里展示 top/hidden 标记需要对应 CSS
    if (OPT.top_flag_style) html += OPT.top_flag_style;
    if (OPT.hidden_flag_style) html += OPT.hidden_flag_style;

    return { kind: "html", body: html };
}

//发布:手动重建 WidgetTags + purge CDN
async function adminPublish(ctx) {
    await articles.rebuildFacets();
    const ok = await purge();
    return {
        kind: "json",
        body: ok ? '{"msg":"published ,purge Cache true","rst":true}' : '{"msg":"published ,buuuuuuuuuuuut purge Cache false !!!!!!","rst":true}',
    };
}

//admin 文章列表分页(每页 20):返回装饰后的 admin 视图
async function adminGetList(ctx, pageNoStr) {
    const pageNo = pageNoStr === undefined ? 1 : parseInt(pageNoStr);
    const result = await articles.list({
        page: pageNo, pageSize: 20,
        includeHidden: true,
        sort: "top",
        decorate: "admin",
    });
    return { kind: "json", body: JSON.stringify(result.items) };
}

//修改文章:渲染 admin/edit 模板,注入 raw article JSON 与 categoryJson
async function adminEdit(ctx, id) {
    const theme_html = await themes.template(ctx.themeCtx, "admin/edit");
    const categoryJson = JSON.stringify(await getWidgetCategory());
    const articleJson = JSON.stringify(await articles.getRaw(id));
    const html = theme_html
        .replaceHtmlPara("categoryJson", categoryJson)
        .replaceHtmlPara("articleJson", articleJson.replaceAll("script>", "script＞"));
    return { kind: "html", body: html };
}

//保存 widget 配置(分类目录/导航/友情链接)
async function adminSaveConfig(ctx) {
    const ret = await parseReq(ctx.request);
    const widgetCategory = ret.WidgetCategory;
    const widgetMenu = ret.WidgetMenu;
    const widgetLink = ret.WidgetLink;

    if (checkFormat(widgetCategory) && checkFormat(widgetMenu) && checkFormat(widgetLink)) {
        let success = await saveWidgetCategory(widgetCategory);
        success = success && await saveWidgetMenu(widgetMenu);
        success = success && await saveWidgetLink(widgetLink);
        return {
            kind: "json",
            body: success ? '{"msg":"saved","rst":true}' : '{"msg":"Save Faild!!!","ret":false}',
        };
    }
    return { kind: "json", body: '{"msg":"Not a JSON object","rst":false}' };
}

//导入: 将上传的 JSON 中所有 key→value 直接写入 KV(走 saveArticle,不走 articles.save)
async function adminImport(ctx) {
    const importJson = (await parseReq(ctx.request)).importJson;
    console.log("开始导入", typeof importJson);

    if (!checkFormat(importJson)) {
        return { kind: "json", body: '{"msg":" importJson Not a JSON object","rst":false}' };
    }
    const parsed = JSON.parse(importJson);
    const keys = Object.keys(parsed);
    for (let i = 0; i < keys.length; ++i) {
        console.log(keys[i], parsed[keys[i]]);
        await saveArticle(keys[i], parsed[keys[i]]);
    }
    return { kind: "json", body: '{"msg":"import success!","rst":true}' };
}

//导出: 遍历所有 KV key,组装成单个 JSON 文件下载
async function adminExport(ctx) {
    console.log("开始导出");
    async function fetchAll(arr, cursor, limit) {
        const list = await CFBLOG.list({ limit: limit, cursor: cursor });
        if (!1 in list) return {};
        arr = arr.concat(list.keys);
        console.log("导出: ", typeof list, JSON.stringify(list));
        if (list.list_complete) {
            let ret = { OPT: OPT };
            for (let i = 0; i < arr.length; ++i) {
                const article = await CFBLOG.get(arr[i].name);
                if (article != null) {
                    ret[arr[i].name] = checkFormat(article) ? JSON.parse(article) : article;
                }
            }
            return ret;
        }
        return await fetchAll(arr, list.cursor, limit);
    }
    const all = await fetchAll([], "", 1);
    return {
        kind: "file",
        name: "cfblog-" + new Date().getTime() + ".json",
        content: JSON.stringify(all),
    };
}

//下载 search.xml
async function adminDownloadSearchXml(ctx) {
    return { kind: "file", name: "search.xml", content: await buildSearchXml() };
}

//下载 sitemap.xml
async function adminDownloadSitemapXml(ctx) {
    return { kind: "file", name: "sitemap.xml", content: await buildSitemapXml() };
}

//新建/编辑文章 upsert:articles.save 担保 index_list + content_lite + WidgetTags 同步
async function adminSave(ctx) {
    const isEdit = ctx.paths[1] === "saveEdit";
    const ret = await parseReq(ctx.request);
    const title = ret.title;
    const createDate = ret.createDate ? ret.createDate.replace('T', ' ') : "";
    const category = ret.category;
    const contentMD = ret["content-markdown-doc"];
    const contentHtml = ret["content-html-code"];

    if (!(title && title.length > 0
        && createDate.length > 0
        && category && category.length > 0
        && contentMD && contentMD.length > 0
        && contentHtml && contentHtml.length > 0)) {
        return { kind: "json", body: '{"msg":"信息不全","rst":false}' };
    }

    const saved = await articles.save({
        id: isEdit ? ret.id : null,
        title: title,
        img: ret.img,
        link: ret.link,
        createDate: createDate,
        category: category,
        tags: ret.tags,
        priority: ret.priority,
        changefreq: ret.changefreq,
        contentMD: contentMD,
        contentHtml: contentHtml,
        top_timestamp: ret.top_timestamp,
        hidden: ret.hidden,
    });
    await purge();
    return {
        kind: "json",
        body: isEdit
            ? '{"msg":"Edit OK","rst":true,"id":"' + saved.id + '"}'
            : '{"msg":"added OK","rst":true,"id":"' + saved.id + '"}',
    };
}

//删除文章:articles.delete 担保 index_list + WidgetTags 同步
async function adminDelete(ctx, id) {
    if (!id || id.length !== 6) {
        return { kind: "json", body: '{"msg":"Delete  false ","rst":false,"id":"' + id + '"}' };
    }
    await articles.delete(id);
    await purge();
    return { kind: "json", body: '{"msg":"Delete (' + id + ')  OK","rst":true,"id":"' + id + '"}' };
}

//action 注册表:paths[1] → action 函数
const ADMIN_ACTIONS = {
    "": adminList,
    "list": adminList,
    "publish": adminPublish,
    "getList": adminGetList,
    "edit": adminEdit,
    "saveConfig": adminSaveConfig,
    "import": adminImport,
    "export": adminExport,
    "search.xml": adminDownloadSearchXml,
    "sitemap.xml": adminDownloadSitemapXml,
    "saveAddNew": adminSave,
    "saveEdit": adminSave,
    "delete": adminDelete,
};

/**------【④.抽丝剥茧，抽取公用的业务方法】-----**/

//访问管理后台或私密博客，则进行Base Auth
function parseBasicAuth(request) {
    const auth = request.headers.get("Authorization");
    if (!auth || !/^Basic [A-Za-z0-9._~+/-]+=*$/i.test(auth)) {
        const token = request.headers.get("cfblog_token");
        if (token) {
            //获取url请求对象
            let url = new URL(request.url)
            let paths = url.pathname.trim("/").split("/")

            //校验权限
            if ("admin" == paths[0] && ("search.xml" == paths[1] || "sitemap.xml" == paths[1])) {
                return token === ACCOUNT.third_token
            }
        }
        return false;
    }
    const [user, pwd] = atob(auth.split(" ").pop()).split(":");
    console.log("-----parseBasicAuth----- ", user, pwd)
    return user === ACCOUNT.user && pwd === ACCOUNT.password
}

//模板获取 / editor_page_scripts 注入 —— 已由 themes.template(themeCtx, name) 取代

//清除缓存
async function purge(cacheZoneId = ACCOUNT.cacheZoneId, cacheToken = ACCOUNT.cacheToken) {
    if (null == cacheZoneId || null == cacheToken || cacheZoneId.length < 5 || cacheToken.length < 5) {
        return false;
    }
    let ret = await fetch(`https://api.cloudflare.com/client/v4/zones/${cacheZoneId}/purge_cache`, {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + cacheToken,
            "Content-Type": "application/json"
        },
        body: '{"purge_everything":true}'
    });
    return (await ret.json()).success
}

//解析后台请求的参数
async function parseReq(request) {
    const content_type = request.headers.get("content-type") || "";
    //json格式
    if (content_type.includes("application/json")) {
        let json = JSON.stringify(await request.json()),
            content_type = JSON.parse(json),
            settings = { category: [], top_timestamp: 0, hidden: 0 };
        for (var i = 0; i < content_type.length; i++) {
            if ("tags" == content_type[i].name) {//标签，用逗号分隔
                settings[content_type[i].name] = content_type[i].value.split(",")
            } else if (content_type[i].name.includes("category")) {
                settings.category.push(content_type[i].value)
            } else {
                settings[content_type[i].name] = content_type[i].value
            }
        }
        return settings
    }
    if (content_type.includes("application/text")) {
        return await request.text();
    }
    if (content_type.includes("text/html")) {
        return await request.text();
    }
    if (content_type.includes("form")) {
        const formData = await request.formData(),
            ret = {};
        for (const field of formData.entries())
            ret[field[0]] = field[1];
        return JSON.stringify(ret)
    }
    {
        const blob = await request.blob();
        return URL.createObjectURL(blob)
    }
}

/**------【⑤.术业有专攻，读写KV方法集】-----**/

/* 【KV的Key的含义】
  SYSTEM_INDEX_LIST             文章列表(不包含内容) —— 由 articles 维护
  SYSTEM_INDEX_NUM              最新文章序号 —— 由 articles 维护
  SYSTEM_VALUE_WidgetMenu       导航栏(admin saveConfig 写入)
  SYSTEM_VALUE_WidgetCategory   分类目录(admin saveConfig 写入)
  SYSTEM_VALUE_WidgetTags       标签 —— 由 articles.save / articles.delete 派生重建
  SYSTEM_VALUE_WidgetLink       链接(admin saveConfig 写入)
*/

//KV读取，toJson是否转为json，默认false
async function getKV(key, toJson = false) {
    console.log("------------KV读取------------key,toJson:", key, toJson);
    let value = await CFBLOG.get(key);
    if (!toJson)
        return null == value ? "[]" : value;
    try {
        return null == value ? [] : JSON.parse(value)
    } catch (e) {
        return []
    }
}
//KV读取，获取导航栏
async function getWidgetMenu() {
    return await getKV("SYSTEM_VALUE_WidgetMenu", true);
}
//KV读取，获取分类目录
async function getWidgetCategory() {
    return await getKV("SYSTEM_VALUE_WidgetCategory", true);
}
//KV读取，获取标签
async function getWidgetTags() {
    return await getKV("SYSTEM_VALUE_WidgetTags", true);
}
//KV读取，获取链接
async function getWidgetLink() {
    return await getKV("SYSTEM_VALUE_WidgetLink", true);
}

//写入KV，value如果未对象类型（数组或者json对象）需要序列化为字符串
async function saveKV(key, value) {
    if (null != value) {
        if ("object" == typeof value) {
            value = JSON.stringify(value)
        }
        await CFBLOG.put(key, value)
        return true
    }
    return false;
}

//写入KV，获取导航栏
async function saveWidgetMenu(value) {
    return await saveKV("SYSTEM_VALUE_WidgetMenu", value);
}
//写入KV，获取分类目录
async function saveWidgetCategory(value) {
    return await saveKV("SYSTEM_VALUE_WidgetCategory", value);
}
//写入KV，获取标签
async function saveWidgetTags(value) {
    return await saveKV("SYSTEM_VALUE_WidgetTags", value);
}
//写入KV，获取链接
async function saveWidgetLink(value) {
    return await saveKV("SYSTEM_VALUE_WidgetLink", value);
}
//写入KV，文章详细信息(仅 import 路径使用,正常写入走 articles.save)
async function saveArticle(id, value) {
    return await saveKV(id, value);
}

/**------【⑥.站在巨人肩膀上，基础方法】-----**/

//扩展String的方法：
//trim清除前后空格
String.prototype.trim = function (t) {
    return t ? this.replace(new RegExp("^\\" + t + "+|\\" + t + "+$", "g"), "") : this.replace(/^\s+|\s+$/g, "")
}
//replaceHtmlPara替换<!--{参数}-->
String.prototype.replaceHtmlPara = function (t, e) {
    return null != e && (e = e.replace(new RegExp("[$]", "g"), "$$$$")), this.replace(new RegExp("\x3c!--{" + t + "}--\x3e", "g"), e)
}
//replaceAll 替换全部
String.prototype.replaceAll = function (t, e) {
    return this.replace(new RegExp(t, "g"), e)
}

//小于2位，前面补个0
function pad(t) {
    return t >= 0 && t <= 9 ? "0" + t : t
}

//排序（默认倒序）
function sort(arr, field, desc = true) {
    return arr.sort((function (m, n) {
        var a = m[field] || '0',
            b = n[field] || '0';
        return desc ? (a > b ? -1 : (a < b ? 1 : 0)) : (a < b ? -1 : (a > b ? 1 : 0))
    }))
}

//undefined转空字符串
function nullToEmpty(k) {
    return k == undefined ? '' : k
}

//判断格式:字符串是否为json，或者参数是否为对象
function checkFormat(t) {
    if ("string" == typeof t) {
        try {
            var e = JSON.parse(t);
            return !("object" != typeof e || !e)
        } catch (t) {
            return false
        }
    }
    return !("object" != typeof t || !t)
}

//引入mustache.js，4.2.0：https://cdn.jsdelivr.net/npm/mustache@4.2.0/mustache.min.js
(function(global,factory){typeof exports==="object"&&typeof module!=="undefined"?module.exports=factory():typeof define==="function"&&define.amd?define(factory):(global=global||self,global.Mustache=factory())})(this,function(){"use strict";var objectToString=Object.prototype.toString;var isArray=Array.isArray||function isArrayPolyfill(object){return objectToString.call(object)==="[object Array]"};function isFunction(object){return typeof object==="function"}function typeStr(obj){return isArray(obj)?"array":typeof obj}function escapeRegExp(string){return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function hasProperty(obj,propName){return obj!=null&&typeof obj==="object"&&propName in obj}function primitiveHasOwnProperty(primitive,propName){return primitive!=null&&typeof primitive!=="object"&&primitive.hasOwnProperty&&primitive.hasOwnProperty(propName)}var regExpTest=RegExp.prototype.test;function testRegExp(re,string){return regExpTest.call(re,string)}var nonSpaceRe=/\S/;function isWhitespace(string){return!testRegExp(nonSpaceRe,string)}var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function escapeHtml(string){return String(string).replace(/[&<>"'`=\/]/g,function fromEntityMap(s){return entityMap[s]})}var whiteRe=/\s*/;var spaceRe=/\s+/;var equalsRe=/\s*=/;var curlyRe=/\s*\}/;var tagRe=/#|\^|\/|>|\{|&|=|!/;function parseTemplate(template,tags){if(!template)return[];var lineHasNonSpace=false;var sections=[];var tokens=[];var spaces=[];var hasTag=false;var nonSpace=false;var indentation="";var tagIndex=0;function stripSpace(){if(hasTag&&!nonSpace){while(spaces.length)delete tokens[spaces.pop()]}else{spaces=[]}hasTag=false;nonSpace=false}var openingTagRe,closingTagRe,closingCurlyRe;function compileTags(tagsToCompile){if(typeof tagsToCompile==="string")tagsToCompile=tagsToCompile.split(spaceRe,2);if(!isArray(tagsToCompile)||tagsToCompile.length!==2)throw new Error("Invalid tags: "+tagsToCompile);openingTagRe=new RegExp(escapeRegExp(tagsToCompile[0])+"\\s*");closingTagRe=new RegExp("\\s*"+escapeRegExp(tagsToCompile[1]));closingCurlyRe=new RegExp("\\s*"+escapeRegExp("}"+tagsToCompile[1]))}compileTags(tags||mustache.tags);var scanner=new Scanner(template);var start,type,value,chr,token,openSection;while(!scanner.eos()){start=scanner.pos;value=scanner.scanUntil(openingTagRe);if(value){for(var i=0,valueLength=value.length;i<valueLength;++i){chr=value.charAt(i);if(isWhitespace(chr)){spaces.push(tokens.length);indentation+=chr}else{nonSpace=true;lineHasNonSpace=true;indentation+=" "}tokens.push(["text",chr,start,start+1]);start+=1;if(chr==="\n"){stripSpace();indentation="";tagIndex=0;lineHasNonSpace=false}}}if(!scanner.scan(openingTagRe))break;hasTag=true;type=scanner.scan(tagRe)||"name";scanner.scan(whiteRe);if(type==="="){value=scanner.scanUntil(equalsRe);scanner.scan(equalsRe);scanner.scanUntil(closingTagRe)}else if(type==="{"){value=scanner.scanUntil(closingCurlyRe);scanner.scan(curlyRe);scanner.scanUntil(closingTagRe);type="&"}else{value=scanner.scanUntil(closingTagRe)}if(!scanner.scan(closingTagRe))throw new Error("Unclosed tag at "+scanner.pos);if(type==">"){token=[type,value,start,scanner.pos,indentation,tagIndex,lineHasNonSpace]}else{token=[type,value,start,scanner.pos]}tagIndex++;tokens.push(token);if(type==="#"||type==="^"){sections.push(token)}else if(type==="/"){openSection=sections.pop();if(!openSection)throw new Error('Unopened section "'+value+'" at '+start);if(openSection[1]!==value)throw new Error('Unclosed section "'+openSection[1]+'" at '+start)}else if(type==="name"||type==="{"||type==="&"){nonSpace=true}else if(type==="="){compileTags(value)}}stripSpace();openSection=sections.pop();if(openSection)throw new Error('Unclosed section "'+openSection[1]+'" at '+scanner.pos);return nestTokens(squashTokens(tokens))}function squashTokens(tokens){var squashedTokens=[];var token,lastToken;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];if(token){if(token[0]==="text"&&lastToken&&lastToken[0]==="text"){lastToken[1]+=token[1];lastToken[3]=token[3]}else{squashedTokens.push(token);lastToken=token}}}return squashedTokens}function nestTokens(tokens){var nestedTokens=[];var collector=nestedTokens;var sections=[];var token,section;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];switch(token[0]){case"#":case"^":collector.push(token);sections.push(token);collector=token[4]=[];break;case"/":section=sections.pop();section[5]=token[2];collector=sections.length>0?sections[sections.length-1][4]:nestedTokens;break;default:collector.push(token)}}return nestedTokens}function Scanner(string){this.string=string;this.tail=string;this.pos=0}Scanner.prototype.eos=function eos(){return this.tail===""};Scanner.prototype.scan=function scan(re){var match=this.tail.match(re);if(!match||match.index!==0)return"";var string=match[0];this.tail=this.tail.substring(string.length);this.pos+=string.length;return string};Scanner.prototype.scanUntil=function scanUntil(re){var index=this.tail.search(re),match;switch(index){case-1:match=this.tail;this.tail="";break;case 0:match="";break;default:match=this.tail.substring(0,index);this.tail=this.tail.substring(index)}this.pos+=match.length;return match};function Context(view,parentContext){this.view=view;this.cache={".":this.view};this.parent=parentContext}Context.prototype.push=function push(view){return new Context(view,this)};Context.prototype.lookup=function lookup(name){var cache=this.cache;var value;if(cache.hasOwnProperty(name)){value=cache[name]}else{var context=this,intermediateValue,names,index,lookupHit=false;while(context){if(name.indexOf(".")>0){intermediateValue=context.view;names=name.split(".");index=0;while(intermediateValue!=null&&index<names.length){if(index===names.length-1)lookupHit=hasProperty(intermediateValue,names[index])||primitiveHasOwnProperty(intermediateValue,names[index]);intermediateValue=intermediateValue[names[index++]]}}else{intermediateValue=context.view[name];lookupHit=hasProperty(context.view,name)}if(lookupHit){value=intermediateValue;break}context=context.parent}cache[name]=value}if(isFunction(value))value=value.call(this.view);return value};function Writer(){this.templateCache={_cache:{},set:function set(key,value){this._cache[key]=value},get:function get(key){return this._cache[key]},clear:function clear(){this._cache={}}}}Writer.prototype.clearCache=function clearCache(){if(typeof this.templateCache!=="undefined"){this.templateCache.clear()}};Writer.prototype.parse=function parse(template,tags){var cache=this.templateCache;var cacheKey=template+":"+(tags||mustache.tags).join(":");var isCacheEnabled=typeof cache!=="undefined";var tokens=isCacheEnabled?cache.get(cacheKey):undefined;if(tokens==undefined){tokens=parseTemplate(template,tags);isCacheEnabled&&cache.set(cacheKey,tokens)}return tokens};Writer.prototype.render=function render(template,view,partials,config){var tags=this.getConfigTags(config);var tokens=this.parse(template,tags);var context=view instanceof Context?view:new Context(view,undefined);return this.renderTokens(tokens,context,partials,template,config)};Writer.prototype.renderTokens=function renderTokens(tokens,context,partials,originalTemplate,config){var buffer="";var token,symbol,value;for(var i=0,numTokens=tokens.length;i<numTokens;++i){value=undefined;token=tokens[i];symbol=token[0];if(symbol==="#")value=this.renderSection(token,context,partials,originalTemplate,config);else if(symbol==="^")value=this.renderInverted(token,context,partials,originalTemplate,config);else if(symbol===">")value=this.renderPartial(token,context,partials,config);else if(symbol==="&")value=this.unescapedValue(token,context);else if(symbol==="name")value=this.escapedValue(token,context,config);else if(symbol==="text")value=this.rawValue(token);if(value!==undefined)buffer+=value}return buffer};Writer.prototype.renderSection=function renderSection(token,context,partials,originalTemplate,config){var self=this;var buffer="";var value=context.lookup(token[1]);function subRender(template){return self.render(template,context,partials,config)}if(!value)return;if(isArray(value)){for(var j=0,valueLength=value.length;j<valueLength;++j){buffer+=this.renderTokens(token[4],context.push(value[j]),partials,originalTemplate,config)}}else if(typeof value==="object"||typeof value==="string"||typeof value==="number"){buffer+=this.renderTokens(token[4],context.push(value),partials,originalTemplate,config)}else if(isFunction(value)){if(typeof originalTemplate!=="string")throw new Error("Cannot use higher-order sections without the original template");value=value.call(context.view,originalTemplate.slice(token[3],token[5]),subRender);if(value!=null)buffer+=value}else{buffer+=this.renderTokens(token[4],context,partials,originalTemplate,config)}return buffer};Writer.prototype.renderInverted=function renderInverted(token,context,partials,originalTemplate,config){var value=context.lookup(token[1]);if(!value||isArray(value)&&value.length===0)return this.renderTokens(token[4],context,partials,originalTemplate,config)};Writer.prototype.indentPartial=function indentPartial(partial,indentation,lineHasNonSpace){var filteredIndentation=indentation.replace(/[^ \t]/g,"");var partialByNl=partial.split("\n");for(var i=0;i<partialByNl.length;i++){if(partialByNl[i].length&&(i>0||!lineHasNonSpace)){partialByNl[i]=filteredIndentation+partialByNl[i]}}return partialByNl.join("\n")};Writer.prototype.renderPartial=function renderPartial(token,context,partials,config){if(!partials)return;var tags=this.getConfigTags(config);var value=isFunction(partials)?partials(token[1]):partials[token[1]];if(value!=null){var lineHasNonSpace=token[6];var tagIndex=token[5];var indentation=token[4];var indentedValue=value;if(tagIndex==0&&indentation){indentedValue=this.indentPartial(value,indentation,lineHasNonSpace)}var tokens=this.parse(indentedValue,tags);return this.renderTokens(tokens,context,partials,indentedValue,config)}};Writer.prototype.unescapedValue=function unescapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return value};Writer.prototype.escapedValue=function escapedValue(token,context,config){var escape=this.getConfigEscape(config)||mustache.escape;var value=context.lookup(token[1]);if(value!=null)return typeof value==="number"&&escape===mustache.escape?String(value):escape(value)};Writer.prototype.rawValue=function rawValue(token){return token[1]};Writer.prototype.getConfigTags=function getConfigTags(config){if(isArray(config)){return config}else if(config&&typeof config==="object"){return config.tags}else{return undefined}};Writer.prototype.getConfigEscape=function getConfigEscape(config){if(config&&typeof config==="object"&&!isArray(config)){return config.escape}else{return undefined}};var mustache={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:undefined,escape:undefined,parse:undefined,render:undefined,Scanner:undefined,Context:undefined,Writer:undefined,set templateCache(cache){defaultWriter.templateCache=cache},get templateCache(){return defaultWriter.templateCache}};var defaultWriter=new Writer;mustache.clearCache=function clearCache(){return defaultWriter.clearCache()};mustache.parse=function parse(template,tags){return defaultWriter.parse(template,tags)};mustache.render=function render(template,view,partials,config){if(typeof template!=="string"){throw new TypeError('Invalid template! Template should be a "string" '+'but "'+typeStr(template)+'" was given as the first '+"argument for mustache#render(template, view, partials)")}return defaultWriter.render(template,view,partials,config)};mustache.escape=escapeHtml;mustache.Scanner=Scanner;mustache.Context=Context;mustache.Writer=Writer;return mustache});
