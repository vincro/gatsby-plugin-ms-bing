import React from "react";

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
    if (
        process.env.NODE_ENV === `production` &&
        pluginOptions &&
        pluginOptions.bingId
    ) {
        const enableAutoSpaTracking = pluginOptions.enableAutoSpaTracking !== false; // default to true

        return setHeadComponents([
            <script
                data-obct
                type="text/javascript"
                key={`gatsby-plugin-ms-bing`}
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"${pluginOptions.bingId}",enableAutoSpaTracking:${String(enableAutoSpaTracking)}};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
                    `,
                }}
            />,
        ]);
    }
};


