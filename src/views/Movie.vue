<template>
  <div class="movie">
    <div class="title">
      <van-nav-bar title="少年的你" left-arrow @click-left="onClickLeft" />
    </div>

    <div class="download-header row">
      <!-- logo -->
      <div class="logo-img col-10" @click="$router.push('/download')"></div>
      <!-- 文字 -->
      <div class="col">
        <p class="maoyan">猫眼</p>
        <p class="jiangli">在线选座，热门影讯，爱上看电影</p>
      </div>

      <div class="info-wrapper col-30">
        <!-- 文字+gif -->
        <!-- 点击跳转下载页面 -->
        <div class="link-btn" @click="$router.push('/download')">立即打开</div>
      </div>
    </div>

    <div class="yi">
      <div class="movie-detail" data-bid="dp_wx_buy_movie">
        <div class="movie-filter"></div>
        <div
          class="poster-bg"
          style="background-image:url(//p0.meituan.net/71.100/movie/7b437e3a0d08d10e374ddc34f71b88fe3379132.jpg)"
        ></div>
        <div class="detail box-flex">
          <div class="poster">
            <img src="//p0.meituan.net/148.208/movie/7b437e3a0d08d10e374ddc34f71b88fe3379132.jpg" />
          </div>
          <div class="content flex">
            <div class="title middle line-ellipsis">少年的你</div>
            <div class="title-en-name line-ellipsis">Better Days</div>
            <div class="score line-ellipsis">
              9.5
              <span class="snum">(101.0万人评)</span>
            </div>
            <div class="type line-ellipsis">
              <span>爱情,青春,剧情</span>

              <div class="type-group"></div>
            </div>
            <div class="src line-ellipsis">中国大陆/135分钟</div>
            <div class="pubDesc line-ellipsis">2019-10-25 09:00大陆上映</div>
          </div>
        </div>

        <div class="arrow-g">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAYAAAAfD8YZAAAAAXNSR0IArs4c6QAAAS5JREFUOBGVkktuwkAMhpOoJ+hhSouE2HbDgiVCNCAOVtQHnINHhbgMJ6g6/f9gR848kmDJeOzxZ3scskzEOfcKXUMLjXXZByYQhJlqMvz3PM//1E9Z7fJoEp5wXvWZoILRZQtg7xVYdhXQzuR2XoEB/NYCOSkVdKI/g441BnuBbmI7aMAE7ilgxyaboYOD4RMO9EWiTwhgJksBLtEvUNolRmGvwJG+yDNsXSB4s2aplR3M4Y80BnuGfiQ7m0Q2qP6JJvaLc/VpTKx5lPe9IfpibviMb+4lOXYXyGLRsRPgSTsSpASdW8Av+YQ3Er+NzgIuELdvZMcAZIUaBsgpCA55IZIEeV+NLSC32hskXCTAH9xFRyWkUsgSrhqAJfjpL8fch0dMMIGWMkmYEIn8Az5Wgp5LHlhmAAAAAElFTkSuQmCC"
          />
        </div>
      </div>
    </div>
    <div class="er">
      <div class="list-wrap" style="min-height: 575px;">
        <div class="item mb-line-b" data-id="788" data-bid="dp_wx_home_cinema_list">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>奥斯卡新建文影城</span>

              <span class="price-block">
                <span class="price">27.9</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">金水区黄河路与经八路交叉口西南角建文新世界商厦四层</div>

              <div class="distance">900m</div>
            </div>
            <div class="flex"></div>

            <div class="label-block">
              <div class="allowRefund">退</div>

              <div class="endorse">改签</div>

              <div class="snack">小吃</div>

              <div class="vipTag">折扣卡</div>

              <div class="hallType">杜比全景声厅</div>

              <div class="hallType">60帧厅</div>
            </div>

            <div class="discount-block">
              <div>
                <div class="discount-label normal platform">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAA0VJREFUSA3FV1tIVFEUXXccNc3RSsgMX6EooehHQZSZFWSaBPURSR9hQUSR/UT+9BEU/UgfQS8qehIUQgV99KKPLIugLIyMiuxFNEo+Ksu3Tmt75jLece7xkjhuOHPOfpy91z1n733nGiD5ziAFPtRwWcx5rsgmjQx8p+86GKg2tuGb4Q/eyMCzJi1oKMcGOgiiwD3y5OEOLoBUzBoXF8tDAQyLjLFdDJQclmChgyQLgP+nlBJAxgTIrd0bMQ0wNBjz96rtLfX2bnzDwFCvrd7wnWIW2FHFByA+007rTP67GbiaZWurP4G764CIaNvNKDyqdI+r7G2G+ux11OgBdL6mRSzb07nQTjzzlLzAfxXBVnVbgcHuYKmF1wMQU1ckkLkReHceaH9l2YzEAsW3Pg2S5wM5W4BH263yENz4AMxNXV+AjiAA/V1KGyyPSjB3jTs7B5DBfEhabHUYb15BtVUek2TlNZxzAC8OAJ9vWF2V3VH87VKrPGM9UHLdKrPhnANYeRkYHrC6cU9XfOVPq1zyxiGND0Du2a6Oi5mYQnVMOJOkea25BzTXAmaOmLoQsx5AQg6QvlZVgjyVi+YyG/7Zk67WCw+yXGPYMzikbKX75VQC3Xz1P9sXImxApAcQPQPI3sxaZisdZkORpiJtVWp7sAf4ekutB/4AMgY5+n8BfbwSAbviktK/PBSIGLTSt2IxdscBiazrH88BTwaQtQloPKwcF50EWp8A7y9a3ebuAjqbFKiuT0Bvm1U/itO8afxWebuB1TfV0SdkAwv2A1EeKnnM7Y3AsrNsVBWjXHI5exGw6po6CU1w2aQHEMlA+XuApuN84r/WIMK9OQE0EFDRaSA2ma9mlmPhMXbAHbz/FqCUwM1KGbt7RKIHkFtFB8zqJv9Lx3QSGW+uALnf2vkM6AXmLAVSy1Qu3N8AxKUBS44EbEOs9EmYyid6yyM2j1HuVaicZeZ9qNbmr5yW/Dn5yPITEtv6ncDMPDIGh0+kY0ifhK4odYT9nYGNkoRp5arkAlL6HwLaGvjSugD08Pgdkh6AQycTMdPnwEQ8O9wrAJg9U0ZeF/PjwZSFZ+wp/zRzGfxAlG80jis8iXBch3ckFmNK7H9lNNyRgjo67AAAAABJRU5ErkJggg=="
                    alt
                  />
                </div>
                <div class="discount-label-text">特惠观影</div>
              </div>

              <div>
                <div class="discount-label normal card">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
                    alt
                  />
                </div>
                <div class="discount-label-text">开卡特惠，首单2张最高立减2元</div>
              </div>
            </div>
          </div>

          <div class="min-show-block disabled J-fload" data-bid="dp_wx_buy_cinema_list_spread">
            <span>近期场次：</span>

            <span class="time-line">17:50</span>

            <span class="time-line">18:20</span>

            <span class="time-line">19:40</span>
          </div>
        </div>

        <div class="item mb-line-b" data-id="26070" data-bid="dp_wx_home_cinema_list">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>银兴国际影城（南阳路店）</span>

              <span class="price-block">
                <span class="price">33</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">金水区南阳路与黄河路交叉口西南角银兴悠客广场2楼</div>

              <div class="distance">1km</div>
            </div>
            <div class="flex"></div>

            <div class="label-block">
              <div class="allowRefund">退</div>

              <div class="endorse">改签</div>

              <div class="snack">小吃</div>

              <div class="vipTag">折扣卡</div>

              <div class="hallType">儿童厅</div>
            </div>

            <div class="discount-block">
              <div>
                <div class="discount-label normal card">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
                    alt
                  />
                </div>
                <div class="discount-label-text">开卡特惠，首单2张最高立减2元</div>
              </div>
            </div>
          </div>

          <div class="min-show-block J-fload" data-bid="dp_wx_buy_cinema_list_spread">
            <span>近期场次：</span>

            <span class="time-line">17:30</span>

            <span class="time-line">17:40</span>

            <span class="time-line">17:45</span>
          </div>
        </div>

        <div class="item mb-line-b" data-id="14497" data-bid="dp_wx_home_cinema_list">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>CGV影城（大卫城IMAX店）</span>

              <span class="price-block">
                <span class="price">38</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">金水区太康路二七路交叉口丹尼斯大卫城6楼</div>

              <div class="distance">1.6km</div>
            </div>
            <div class="flex"></div>

            <div class="label-block">
              <div class="snack">小吃</div>

              <div class="vipTag">折扣卡</div>

              <div class="hallType">IMAX厅</div>

              <div class="hallType">60帧厅</div>
            </div>

            <div class="discount-block">
              <div>
                <div class="discount-label normal card">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
                    alt
                  />
                </div>
                <div class="discount-label-text">开卡特惠，35.9元起开卡</div>
              </div>
            </div>
          </div>

          <div class="min-show-block J-fload" data-bid="dp_wx_buy_cinema_list_spread">
            <span>近期场次：</span>

            <span class="time-line">17:40</span>

            <span class="time-line">18:15</span>

            <span class="time-line">19:00</span>
          </div>
        </div>

        <div class="item mb-line-b" data-id="23931" data-bid="dp_wx_home_cinema_list">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>建业艾米1895电影街万象城店</span>

              <span class="price-block">
                <span class="price">27.9</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">二七区五彩路•民主路华润万象城5楼西</div>

              <div class="distance">1.7km</div>
            </div>
            <div class="flex"></div>

            <div class="label-block">
              <div class="allowRefund">退</div>

              <div class="endorse">改签</div>

              <div class="snack">小吃</div>

              <div class="vipTag">折扣卡</div>
            </div>
          </div>

          <div class="min-show-block J-fload" data-bid="dp_wx_buy_cinema_list_spread">
            <span>近期场次：</span>

            <span class="time-line">17:40</span>

            <span class="time-line">18:15</span>

            <span class="time-line">18:50</span>
          </div>
        </div>

        <div class="item mb-line-b" data-id="793" data-bid="dp_wx_home_cinema_list">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>奥斯卡大上海国际影城</span>

              <span class="price-block">
                <span class="price">37</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">管城回族区东太康路人民路大上海城A区6楼（百货大楼东侧）</div>

              <div class="distance">1.8km</div>
            </div>
            <div class="flex"></div>

            <div class="label-block">
              <div class="allowRefund">退</div>

              <div class="endorse">改签</div>

              <div class="snack">小吃</div>

              <div class="vipTag">折扣卡</div>

              <div class="hallType">CGS中国巨幕厅</div>

              <div class="hallType">杜比全景声厅</div>
            </div>

            <div class="discount-block">
              <div>
                <div class="discount-label normal card">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
                    alt
                  />
                </div>
                <div class="discount-label-text">开卡特惠，首单2张最高立减2元</div>
              </div>
            </div>
          </div>

          <div class="min-show-block J-fload" data-bid="dp_wx_buy_cinema_list_spread">
            <span>近期场次：</span>

            <span class="time-line">18:00</span>

            <span class="time-line">18:20</span>

            <span class="time-line">18:50</span>
          </div>
        </div>

        <div class="item mb-line-b" data-id="16958" data-bid="dp_wx_home_cinema_list">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>中影星影迷影城（光彩店）</span>

              <span class="price-block">
                <span class="price">33</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">管城回族区人民路太康路交叉口光彩3楼（歌迷KTV楼下）</div>

              <div class="distance">1.9km</div>
            </div>
            <div class="flex"></div>

            <div class="label-block">
              <div class="allowRefund">退</div>

              <div class="endorse">改签</div>

              <div class="snack">小吃</div>

              <div class="vipTag">折扣卡</div>

              <div class="hallType">杜比全景声厅</div>

              <div class="hallType">巨幕厅</div>
            </div>

            <div class="discount-block">
              <div>
                <div class="discount-label normal card">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
                    alt
                  />
                </div>
                <div class="discount-label-text">开卡特惠，首单2张最高立减2元</div>
              </div>
            </div>
          </div>

          <div class="min-show-block J-fload" data-bid="dp_wx_buy_cinema_list_spread">
            <span>近期场次：</span>

            <span class="time-line">17:35</span>

            <span class="time-line">18:00</span>

            <span class="time-line">18:30</span>
          </div>
        </div>

        <div class="item mb-line-b" data-id="24699" data-bid="dp_wx_home_cinema_list">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>银兴国际影城（二七广场店）</span>

              <span class="price-block">
                <span class="price">33</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">二七区二七路与人民路交叉口郑州华联（地铁二七广场站H出口）4至5层银兴影城</div>

              <div class="distance">2km</div>
            </div>
            <div class="flex"></div>

            <div class="label-block">
              <div class="endorse">改签</div>

              <div class="snack">小吃</div>

              <div class="vipTag">折扣卡</div>
            </div>
          </div>

          <div class="min-show-block J-fload" data-bid="dp_wx_buy_cinema_list_spread">
            <span>近期场次：</span>

            <span class="time-line">17:20</span>

            <span class="time-line">17:30</span>

            <span class="time-line">17:35</span>
          </div>
        </div>

        <div class="item mb-line-b" data-id="17131" data-bid="dp_wx_home_cinema_list">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>中影星美国际影城（正道中环店）</span>

              <span class="price-block">
                <span class="price">35</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">金水区花园路与红专路交叉口正道中环百货5楼</div>

              <div class="distance">2.1km</div>
            </div>
            <div class="flex"></div>

            <div class="label-block">
              <div class="allowRefund">退</div>

              <div class="endorse">改签</div>

              <div class="snack">小吃</div>

              <div class="vipTag">折扣卡</div>
            </div>

            <div class="discount-block">
              <div>
                <div class="discount-label normal card">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
                    alt
                  />
                </div>
                <div class="discount-label-text">开卡特惠，首单2张最高立减4元</div>
              </div>
            </div>
          </div>

          <div class="min-show-block J-fload" data-bid="dp_wx_buy_cinema_list_spread">
            <span>近期场次：</span>

            <span class="time-line">17:40</span>

            <span class="time-line">18:00</span>

            <span class="time-line">19:00</span>
          </div>
        </div>

        <div class="item mb-line-b" data-id="792" data-bid="dp_wx_home_cinema_list">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>奥斯卡电影大世界</span>

              <span class="price-block">
                <span class="price">34</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">金水区农业路与文博东路交叉口西北角（省博物院东配楼）</div>

              <div class="distance">2.2km</div>
            </div>
            <div class="flex"></div>

            <div class="label-block">
              <div class="allowRefund">退</div>

              <div class="endorse">改签</div>

              <div class="snack">小吃</div>

              <div class="vipTag">折扣卡</div>

              <div class="hallType">儿童厅</div>
            </div>

            <div class="discount-block">
              <div>
                <div class="discount-label normal card">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
                    alt
                  />
                </div>
                <div class="discount-label-text">开卡特惠，首单2张最高立减2元</div>
              </div>
            </div>
          </div>

          <div class="min-show-block J-fload" data-bid="dp_wx_buy_cinema_list_spread">
            <span>近期场次：</span>

            <span class="time-line">17:20</span>

            <span class="time-line">17:50</span>

            <span class="time-line">18:10</span>
          </div>
        </div>

        <div class="item mb-line-b" data-id="787" data-bid="dp_wx_home_cinema_list">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>奥斯卡会堂电影城</span>

              <span class="price-block">
                <span class="price">34</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">金水区花园路1号（紫荆山公面对面省人民大会堂）</div>

              <div class="distance">2.3km</div>
            </div>
            <div class="flex"></div>

            <div class="label-block">
              <div class="endorse">改签</div>

              <div class="snack">小吃</div>

              <div class="vipTag">折扣卡</div>

              <div class="hallType">CGS中国巨幕厅</div>
            </div>

            <div class="discount-block">
              <div>
                <div class="discount-label normal card">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
                    alt
                  />
                </div>
                <div class="discount-label-text">开卡特惠，首单2张最高立减6元</div>
              </div>
            </div>
          </div>

          <div class="min-show-block J-fload" data-bid="dp_wx_buy_cinema_list_spread">
            <span>近期场次：</span>

            <span class="time-line">17:20</span>

            <span class="time-line">19:45</span>

            <span class="time-line">22:10</span>
          </div>
        </div>

        <div class="item mb-line-b" data-id="27633" data-bid="dp_wx_home_cinema_list">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>奥斯卡德化星影院</span>

              <span class="price-block">
                <span class="price">34</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">二七区德化街100号德化风情购物广场三层</div>

              <div class="distance">2.3km</div>
            </div>
            <div class="flex"></div>

            <div class="label-block">
              <div class="endorse">改签</div>

              <div class="snack">小吃</div>

              <div class="vipTag">折扣卡</div>

              <div class="hallType">杜比全景声厅</div>
            </div>

            <div class="discount-block">
              <div>
                <div class="discount-label normal card">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
                    alt
                  />
                </div>
                <div class="discount-label-text">开卡特惠，首单2张最高立减4元</div>
              </div>
            </div>
          </div>

          <div class="min-show-block J-fload" data-bid="dp_wx_buy_cinema_list_spread">
            <span>近期场次：</span>

            <span class="time-line">18:00</span>

            <span class="time-line">18:25</span>

            <span class="time-line">19:10</span>
          </div>
        </div>

        <div class="item mb-line-b" data-id="7774" data-bid="dp_wx_home_cinema_list">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>奥斯卡丰业国际影城</span>

              <span class="price-block">
                <span class="price">34</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">金水区农业路与南阳路交叉口向东100米路南丰业广场二楼（南阳路口东侧）</div>

              <div class="distance">2.3km</div>
            </div>
            <div class="flex"></div>

            <div class="label-block">
              <div class="endorse">改签</div>

              <div class="snack">小吃</div>

              <div class="vipTag">折扣卡</div>
            </div>
          </div>

          <div class="min-show-block J-fload" data-bid="dp_wx_buy_cinema_list_spread">
            <span>近期场次：</span>

            <span class="time-line">17:50</span>

            <span class="time-line">18:20</span>

            <span class="time-line">18:55</span>
          </div>
        </div>

        <div class="item mb-line-b" data-id="790" data-bid="dp_wx_home_cinema_list">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>奥斯卡德化电影城</span>

              <span class="price-block">
                <span class="price">34</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">二七区德化街100号百年德化百年风情购物广场A区3层</div>

              <div class="distance">2.3km</div>
            </div>
            <div class="flex"></div>

            <div class="label-block">
              <div class="endorse">改签</div>

              <div class="snack">小吃</div>

              <div class="vipTag">折扣卡</div>
            </div>
          </div>

          <div class="min-show-block J-fload" data-bid="dp_wx_buy_cinema_list_spread">
            <span>近期场次：</span>

            <span class="time-line">18:10</span>

            <span class="time-line">18:50</span>

            <span class="time-line">19:20</span>
          </div>
        </div>

        <div class="item mb-line-b" data-id="15661" data-bid="dp_wx_home_cinema_list">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>横店电影城（德化无限城店）</span>

              <span class="price-block">
                <span class="price">34.9</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">二七区德化街36号无限城6层</div>

              <div class="distance">2.4km</div>
            </div>
            <div class="flex"></div>

            <div class="label-block">
              <div class="snack">小吃</div>

              <div class="vipTag">折扣卡</div>

              <div class="hallType">杜比全景声厅</div>

              <div class="hallType">巨幕厅</div>
            </div>

            <div class="discount-block">
              <div>
                <div class="discount-label normal card">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
                    alt
                  />
                </div>
                <div class="discount-label-text">开卡特惠，首单2张最高立减8元</div>
              </div>
            </div>
          </div>

          <div class="min-show-block J-fload" data-bid="dp_wx_buy_cinema_list_spread">
            <span>近期场次：</span>

            <span class="time-line">17:40</span>

            <span class="time-line">18:10</span>

            <span class="time-line">18:40</span>
          </div>
        </div>

        <div class="item mb-line-b" data-id="783" data-bid="dp_wx_home_cinema_list">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>万达影城金水奥纳店</span>

              <span class="price-block">
                <span class="price">35</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">金水区花园路农业路大商新玛特8楼奥纳电影城（近丹尼斯）</div>

              <div class="distance">2.5km</div>
            </div>
            <div class="flex"></div>

            <div class="label-block">
              <div class="endorse">改签</div>

              <div class="snack">小吃</div>

              <div class="vipTag">折扣卡</div>
            </div>

            <div class="discount-block">
              <div>
                <div class="discount-label normal card">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
                    alt
                  />
                </div>
                <div class="discount-label-text">开卡特惠，首单1张最高立减1元</div>
              </div>
            </div>
          </div>

          <div class="min-show-block J-fload" data-bid="dp_wx_buy_cinema_list_spread">
            <span>近期场次：</span>

            <span class="time-line">17:25</span>

            <span class="time-line">17:50</span>

            <span class="time-line">18:15</span>
          </div>
        </div>

        <div class="item mb-line-b" data-id="24641" data-bid="dp_wx_home_cinema_list">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>中影新干线影城（郑州新世界百货店）</span>

              <span class="price-block">
                <span class="price">33</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">管城回族区紫荆山路商城路新世界百货4楼</div>

              <div class="distance">2.8km</div>
            </div>
            <div class="flex"></div>

            <div class="label-block">
              <div class="allowRefund">退</div>

              <div class="endorse">改签</div>

              <div class="snack">小吃</div>

              <div class="vipTag">折扣卡</div>
            </div>
          </div>

          <div class="min-show-block J-fload" data-bid="dp_wx_buy_cinema_list_spread">
            <span>近期场次：</span>

            <span class="time-line">17:20</span>

            <span class="time-line">17:45</span>

            <span class="time-line">18:10</span>
          </div>
        </div>

        <div class="item mb-line-b" data-id="27292" data-bid="dp_wx_home_cinema_list">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>东方嘉禾影城（花丹店）</span>

              <span class="price-block">
                <span class="price">33</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">金水区花园路农业路交叉口丹尼斯14楼</div>

              <div class="distance">2.8km</div>
            </div>
            <div class="flex"></div>

            <div class="label-block">
              <div class="allowRefund">退</div>

              <div class="endorse">改签</div>

              <div class="snack">小吃</div>
            </div>
          </div>

          <div class="min-show-block J-fload" data-bid="dp_wx_buy_cinema_list_spread">
            <span>近期场次：</span>

            <span class="time-line">17:20</span>

            <span class="time-line">17:45</span>

            <span class="time-line">18:15</span>
          </div>
        </div>

        <div class="item mb-line-b" data-id="26652" data-bid="dp_wx_home_cinema_list">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>奥斯卡国际影城（硅谷广场店）</span>

              <span class="price-block">
                <span class="price">39</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">金水区文化路82号硅谷广场6楼</div>

              <div class="distance">2.8km</div>
            </div>
            <div class="flex"></div>

            <div class="label-block">
              <div class="endorse">改签</div>

              <div class="snack">小吃</div>

              <div class="hallType">杜比全景声厅</div>
            </div>
          </div>

          <div class="min-show-block J-fload" data-bid="dp_wx_buy_cinema_list_spread">
            <span>近期场次：</span>

            <span class="time-line">17:20</span>

            <span class="time-line">18:00</span>

            <span class="time-line">18:40</span>
          </div>
        </div>

        <div class="item mb-line-b" data-id="24485" data-bid="dp_wx_home_cinema_list">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>悦嘉辰影城（璞丽中心店）</span>

              <span class="price-block">
                <span class="price">33</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">金水区黄河路1号院璞丽广场C座3楼</div>

              <div class="distance">3.3km</div>
            </div>
            <div class="flex"></div>

            <div class="label-block">
              <div class="allowRefund">退</div>

              <div class="endorse">改签</div>

              <div class="snack">小吃</div>

              <div class="vipTag">折扣卡</div>
            </div>
          </div>

          <div class="min-show-block J-fload" data-bid="dp_wx_buy_cinema_list_spread">
            <span>近期场次：</span>

            <span class="time-line">17:15</span>

            <span class="time-line">17:50</span>

            <span class="time-line">18:55</span>
          </div>
        </div>

        <div class="item mb-line-b" data-id="26302" data-bid="dp_wx_home_cinema_list">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>CGV影城（正弘城IMAX店）</span>

              <span class="price-block">
                <span class="price">38</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">金水区花园路126号正弘国际广场6-7层</div>

              <div class="distance">3.4km</div>
            </div>
            <div class="flex"></div>

            <div class="label-block">
              <div class="snack">小吃</div>

              <div class="vipTag">折扣卡</div>

              <div class="hallType">IMAX厅</div>
            </div>

            <div class="discount-block">
              <div>
                <div class="discount-label normal card">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
                    alt
                  />
                </div>
                <div class="discount-label-text">开卡特惠，35.9元起开卡</div>
              </div>
            </div>
          </div>

          <div class="min-show-block J-fload" data-bid="dp_wx_buy_cinema_list_spread">
            <span>近期场次：</span>

            <span class="time-line">17:30</span>

            <span class="time-line">18:00</span>

            <span class="time-line">18:30</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.title .van-nav-bar__title {
  color: #fff;
}
.title .van-nav-bar {
  background-color: #df2d2d;
}
.download-header {
  background: #fff;
  height: 60px;
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  /* 居中 */
  -webkit-box-align: center;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
}
.info-wrapper {
  text-align: justify;
}
.download-header .logo-img {
  margin-left: 11px;
  margin-right: 6px;
  min-width: 42px;
  height: 42px;
  background: url(http://s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png)
    no-repeat;
  background-size: contain;
}
.maoyan {
  font-size: 17px;
  color: #222;
  line-height: 23px;
}
.jiangli {
  font-size: 12px;
  color: #999;
}
/* 2右图片 */
.topNav {
  height: 44px;
  line-height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}
.topNav li {
  height: 100%;
  cursor: pointer;
}

.download-header .link-btn {
  display: flex;
  /* justify-content: center;
  align-items: center;
  margin-right: 6px; */
  /* border-radius: 22px; */
  background: #f03d37;
  color: #fff;
  font-size: 13px;
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  padding-left: 15px;
}
.body .movie-detail {
    height: 188px;
    position: relative;
    cursor: pointer;
}
.body .movie-detail .movie-filter {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: #333;
}
.body .movie-detail .poster-bg {
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    position: absolute;
    -webkit-filter: blur(1.2rem);
    filter: blur(1.2rem);
    background-size: cover;
    background-repeat: no-repeat;
    opacity: .55;
}
.body .movie-detail .detail .poster img {
    width: 110px;
    height: 150px;
    box-sizing: border-box;
}
.body .movie-detail .detail .content {
    overflow-x: hidden;
    margin-left: 12.5px;
    line-height: 1;
    color: #fff;
}
.cinema-list .list-wrap .item {
    padding: 13px 15px 13px 0;
    margin-left: 15px;
    background-color: #fff;
    position: relative;
    overflow: hidden;
}
.cinema-list .list-wrap .min-show-block {
    padding: 0 15px 0 0;
    margin-right: -15px;
    line-height: 1.5;
    font-size: 0;
}
</style>