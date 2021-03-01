const forkBannerUrls = ["https://res.cloudinary.com/mikel-howarth/image/upload/v1614610231/super_fork_me_dbfzav.png", "https://res.cloudinary.com/mikel-howarth/image/upload/v1614610231/fork_me_64_kaqhli.png"];
const main = document.querySelector('main');

function bannerMaker(url) {
  const anchor = `<a href="https://github.com/link-to-your-repo" target="_blank"><img src="${url}" alt="Fork me on GitHub!" style="position: absolute;right: 0;top: 0;height: 100px;"></a>`;
  //TODO: make dynamic with REGEX or string replacement
  const anchorEncoded = `&lt;a href=&quot;https://github.com/link-to-your-repo&quot; target=&quot;_blank&quot;>&lt;img src=&quot;${url}&quot; alt=&quot;Fork me on GitHub!&quot; style=&quot;position: absolute;right: 0;top: 0;height: 100px;&quot;&gt;&lt;/a&gt;`;

  const forkBanner = `<div class="fork-banner-container">
                        ${anchor}
                        <pre><code>${anchorEncoded}</code></pre>
                      </div>`
  return forkBanner;
}

forkBannerUrls.forEach((bannerUrl) => main.innerHTML += bannerMaker(bannerUrl))