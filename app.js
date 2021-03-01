const forkBannerUrls = ["https://res.cloudinary.com/mikel-howarth/image/upload/v1614610231/super_fork_me_dbfzav.png", "https://res.cloudinary.com/mikel-howarth/image/upload/v1614610231/fork_me_64_kaqhli.png"];
const main = document.querySelector('main');

function bannerMaker(url) {
  const forkBanner = `<div class="fork-banner-container">
                        <a href="https://github.com/link-to-your-repo" target="_blank"><img src="${url}" alt="Fork me on GitHub!" style="position: absolute;right: 0;top: 0;height: 100px;"></a>
                      </div>`
  return forkBanner;
}

forkBannerUrls.forEach((bannerUrl) => main.innerHTML += bannerMaker(bannerUrl))