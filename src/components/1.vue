<template>
  <div>
    <div class="soubg">
      <div class="sou">
        <!--Begin 所在收货地区 Begin-->
        <span class="s_city_b">
        	<span class="fl">送货至：</span>
            <span class="s_city">
            	<span>四川</span>
                <div class="s_city_bg">
                	<div class="s_city_t"></div>
                    <div class="s_city_c">
                    	<h2>请选择所在的收货地区</h2>
                        <table border="0" class="c_tab" style="width:235px; margin-top:10px;" cellspacing="0" cellpadding="0">
                          <tr>
                            <th>A</th>
                            <td class="c_h"><span>安徽</span><span>澳门</span></td>
                          </tr>
                          <tr>
                            <th>B</th>
                            <td class="c_h"><span>北京</span></td>
                          </tr>
                          <tr>
                            <th>C</th>
                            <td class="c_h"><span>重庆</span></td>
                          </tr>
                          <tr>
                            <th>F</th>
                            <td class="c_h"><span>福建</span></td>
                          </tr>
                          <tr>
                            <th>G</th>
                            <td class="c_h"><span>广东</span><span>广西</span><span>贵州</span><span>甘肃</span></td>
                          </tr>
                          <tr>
                            <th>H</th>
                            <td class="c_h"><span>河北</span><span>河南</span><span>黑龙江</span><span>海南</span><span>湖北</span><span>湖南</span></td>
                          </tr>
                          <tr>
                            <th>J</th>
                            <td class="c_h"><span>江苏</span><span>吉林</span><span>江西</span></td>
                          </tr>
                          <tr>
                            <th>L</th>
                            <td class="c_h"><span>辽宁</span></td>
                          </tr>
                          <tr>
                            <th>N</th>
                            <td class="c_h"><span>内蒙古</span><span>宁夏</span></td>
                          </tr>
                          <tr>
                            <th>Q</th>
                            <td class="c_h"><span>青海</span></td>
                          </tr>
                          <tr>
                            <th>S</th>
                            <td class="c_h"><span>上海</span><span>山东</span><span>山西</span><span class="c_check">四川</span><span>陕西</span></td>
                          </tr>
                          <tr>
                            <th>T</th>
                            <td class="c_h"><span>台湾</span><span>天津</span></td>
                          </tr>
                          <tr>
                            <th>X</th>
                            <td class="c_h"><span>西藏</span><span>香港</span><span>新疆</span></td>
                          </tr>
                          <tr>
                            <th>Y</th>
                            <td class="c_h"><span>云南</span></td>
                          </tr>
                          <tr>
                            <th>Z</th>
                            <td class="c_h"><span>浙江</span></td>
                          </tr>
                        </table>
                    </div>
                </div>
            </span>
        </span>
        <!--End 所在收货地区 End-->
        <span class="fr">
          <span class="fl" v-if="name==null">你好,请<router-link  to="/Login">登录</router-link>&nbsp; <a href=" " style="color:#ff4e00;">免费注册</a>&nbsp;&nbsp;</span>
        	<span class="fl">
            <div class="ss_list"><router-link  to="/Member_User">{{name}}</router-link>
              <router-link to="">退出</router-link>
            </div>
            	<div class="ss_list">
                	<a href="#">收藏夹</a>
                    <div class="ss_list_bg">
                    	<div class="s_city_t"></div>
                        <div class="ss_list_c">
                        	<ul>
                            	<li><a href="#">我的收藏夹</a></li>
                                <li><a href="#">我的收藏夹</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="ss_list">
                	<a href="#">客户服务</a>
                    <div class="ss_list_bg">
                    	<div class="s_city_t"></div>
                        <div class="ss_list_c">
                        	<ul>
                            	<li><a href="#">客户服务</a></li>
                                <li><a href="#">客户服务</a></li>
                                <li><a href="#">客户服务</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="ss_list">
                	<a href="#">网站导航</a>
                    <div class="ss_list_bg">
                    	<div class="s_city_t"></div>
                        <div class="ss_list_c">
                        	<ul>
                            <li><a href="#/Index">首页</a></li>
                            	<li><a href="#/Member_User">个人中心</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </span>
            <span class="fl">|&nbsp;关注我们：</span>
            <span class="s_sh"><a href="#" class="sh1">新浪</a><a href="#" class="sh2">微信</a></span>
            <span class="fr">|&nbsp;<a href="#">手机版&nbsp;<img src="../assets/images//s_tel.png" align="absmiddle" /></a></span>
        </span>
      </div>
    </div>
    <div class="top">
      <div class="logo"><a href="Index.html"><img src="../assets/images/logo.png" /></a></div>
      <div class="search">
        <form>
          <input type="text" value="" class="s_ipt" />
          <input type="submit" value="搜索" class="s_btn" />
        </form>
        <span class="fl"><a href="#">咖啡</a><a href="#">iphone 6S</a><a href="#">新鲜美食</a><a href="#">蛋糕</a><a href="#">日用品</a><a href="#">连衣裙</a></span>
      </div>
      <div class="i_car">
        <div class="car_t">购物车 [ <span>3</span> ]</div>
        <div class="car_bg">
          <!--Begin 购物车未登录 Begin-->
          <div class="un_login">还未登录！<a href="Login.html" style="color:#ff4e00;">马上登录</a> 查看购物车！</div>
          <!--End 购物车未登录 End-->
          <!--Begin 购物车已登录 Begin-->
          <ul class="cars">
            <li>
              <div class="img"><a href="#"><img src="../assets/images/car1.jpg" width="58" height="58" /></a></div>
              <div class="name"><a href="#">法颂浪漫梦境50ML 香水女士持久清新淡香 送2ML小样3只</a></div>
              <div class="price"><font color="#ff4e00">￥399</font> X1</div>
            </li>
            <li>
              <div class="img"><a href="#"><img src="../assets/images/car2.jpg" width="58" height="58" /></a></div>
              <div class="name"><a href="#">香奈儿（Chanel）邂逅活力淡香水50ml</a></div>
              <div class="price"><font color="#ff4e00">￥399</font> X1</div>
            </li>
            <li>
              <div class="img"><a href="#"><img src="../assets/images/car2.jpg" width="58" height="58" /></a></div>
              <div class="name"><a href="#">香奈儿（Chanel）邂逅活力淡香水50ml</a></div>
              <div class="price"><font color="#ff4e00">￥399</font> X1</div>
            </li>
          </ul>
          <div class="price_sum">共计&nbsp; <font color="#ff4e00">￥</font><span>1058</span></div>
          <div class="price_a"><a href="#">去购物车结算</a></div>
          <!--End 购物车已登录 End-->
        </div>
      </div>
    </div>
    <!--End Header End-->
    <!--Begin Menu Begin-->
    <div class="menu_bg">
      <div class="menu">
        <!--Begin 商品分类详情 Begin-->
        <div class="nav">
          <div class="nav_t">全部商品分类</div>
          <div class="leftNav none">
            <ul>
              <li>
                <div class="fj">
                  <span class="n_img"><span></span><img src="../assets/images/nav1.png" /></span>
                  <span class="fl">进口食品、生鲜</span>
                </div>
                <div class="zj">
                  <div class="zj_l">
                    <div class="zj_l_c">
                      <h2>零食 / 糖果 / 巧克力</h2>
                      <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                      <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                      <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                    </div>
                    <div class="zj_l_c">
                      <h2>零食 / 糖果 / 巧克力</h2>
                      <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                      <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                      <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                    </div>
                    <div class="zj_l_c">
                      <h2>零食 / 糖果 / 巧克力</h2>
                      <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                      <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                      <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                    </div>
                    <div class="zj_l_c">
                      <h2>零食 / 糖果 / 巧克力</h2>
                      <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                      <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                      <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                    </div>
                    <div class="zj_l_c">
                      <h2>零食 / 糖果 / 巧克力</h2>
                      <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                      <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                      <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                    </div>
                    <div class="zj_l_c">
                      <h2>零食 / 糖果 / 巧克力</h2>
                      <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                      <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                      <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                    </div>
                  </div>
                  <div class="zj_r">
                    <a href="#"><img src="../assets/images/n_img1.jpg" width="236" height="200" /></a>
                    <a href="#"><img src="../assets/images/n_img2.jpg" width="236" height="200" /></a>
                  </div>
                </div>
              </li>
              <li>
                <div class="fj">
                  <span class="n_img"><span></span><img src="../assets/images/nav2.png" /></span>
                  <span class="fl">食品、饮料、酒</span>
                </div>
                <div class="zj" style="top:-40px;">
                  <div class="zj_l">
                    <div class="zj_l_c">
                      <h2>零食 / 糖果 / 巧克力2</h2>
                      <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                      <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                      <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                    </div>
                    <div class="zj_l_c">
                      <h2>零食 / 糖果 / 巧克力</h2>
                      <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                      <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                      <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                    </div>
                  </div>
                  <div class="zj_r">
                    <a href="#"><img src="../assets/images/n_img1.jpg" width="236" height="200" /></a>
                    <a href="#"><img src="../assets/images/n_img2.jpg" width="236" height="200" /></a>
                  </div>
                </div>
              </li>
              <li>
                <div class="fj">
                  <span class="n_img"><span></span><img src="../assets/images/nav3.png" /></span>
                  <span class="fl">母婴、玩具、童装</span>
                </div>
                <div class="zj" style="top:-80px;">
                  <div class="zj_l">
                    <div class="zj_l_c">
                      <h2>零食 / 糖果 / 巧克力3</h2>
                      <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                      <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                      <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                    </div>
                  </div>
                  <div class="zj_r">
                    <a href="#"><img src="../assets/images/n_img1.jpg" width="236" height="200" /></a>
                    <a href="#"><img src="../assets/images/n_img2.jpg" width="236" height="200" /></a>
                  </div>
                </div>
              </li>
              <li>
                <div class="fj">
                  <span class="n_img"><span></span><img src="../assets/images/nav4.png" /></span>
                  <span class="fl">家居、家庭清洁、纸品</span>
                </div>
                <div class="zj" style="top:-120px;">
                  <div class="zj_l">
                    <div class="zj_l_c">
                      <h2>零食 / 糖果 / 巧克力4</h2>
                      <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                      <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                      <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                    </div>
                  </div>
                  <div class="zj_r">
                    <a href="#"><img src="../assets/images/n_img1.jpg" width="236" height="200" /></a>
                    <a href="#"><img src="../assets/images/n_img2.jpg" width="236" height="200" /></a>
                  </div>
                </div>
              </li>
              <li>
                <div class="fj">
                  <span class="n_img"><span></span><img src="../assets/images/nav5.png" /></span>
                  <span class="fl">美妆、个人护理、洗护</span>
                </div>
                <div class="zj" style="top:-160px;">
                  <div class="zj_l">
                    <div class="zj_l_c">
                      <h2>零食 / 糖果 / 巧克力5</h2>
                      <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                      <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                      <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                    </div>
                  </div>
                  <div class="zj_r">
                    <a href="#"><img src="../assets/images/n_img1.jpg" width="236" height="200" /></a>
                    <a href="#"><img src="../assets/images/n_img2.jpg" width="236" height="200" /></a>
                  </div>
                </div>
              </li>
              <li>
                <div class="fj">
                  <span class="n_img"><span></span><img src="../assets/images/nav6.png" /></span>
                  <span class="fl">女装、内衣、中老年</span>
                </div>
                <div class="zj" style="top:-200px;">
                  <div class="zj_l">
                    <div class="zj_l_c">
                      <h2>零食 / 糖果 / 巧克力6</h2>
                      <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                      <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                      <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                    </div>
                  </div>
                  <div class="zj_r">
                    <a href="#"><img src="../assets/images/n_img1.jpg" width="236" height="200" /></a>
                    <a href="#"><img src="../assets/images/n_img2.jpg" width="236" height="200" /></a>
                  </div>
                </div>
              </li>
              <li>
                <div class="fj">
                  <span class="n_img"><span></span><img src="../assets/images/nav7.png" /></span>
                  <span class="fl">鞋靴、箱包、腕表配饰</span>
                </div>
                <div class="zj" style="top:-240px;">
                  <div class="zj_l">
                    <div class="zj_l_c">
                      <h2>零食 / 糖果 / 巧克力7</h2>
                      <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                      <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                      <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                    </div>
                  </div>
                  <div class="zj_r">
                    <a href="#"><img src="../assets/images/n_img1.jpg" width="236" height="200" /></a>
                    <a href="#"><img src="../assets/images/n_img2.jpg" width="236" height="200" /></a>
                  </div>
                </div>
              </li>
              <li>
                <div class="fj">
                  <span class="n_img"><span></span><img src="../assets/images/nav8.png" /></span>
                  <span class="fl">男装、运动</span>
                </div>
                <div class="zj" style="top:-280px;">
                  <div class="zj_l">
                    <div class="zj_l_c">
                      <h2>零食 / 糖果 / 巧克力8</h2>
                      <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                      <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                      <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                    </div>
                  </div>
                  <div class="zj_r">
                    <a href="#"><img src="../assets/images/n_img1.jpg" width="236" height="200" /></a>
                    <a href="#"><img src="../assets/images/n_img2.jpg" width="236" height="200" /></a>
                  </div>
                </div>
              </li>
              <li>
                <div class="fj">
                  <span class="n_img"><span></span><img src="../assets/images/nav9.png" /></span>
                  <span class="fl">手机、小家电、电脑</span>
                </div>
                <div class="zj" style="top:-320px;">
                  <div class="zj_l">
                    <div class="zj_l_c">
                      <h2>零食 / 糖果 / 巧克力9</h2>
                      <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                      <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                      <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                    </div>
                  </div>
                  <div class="zj_r">
                    <a href="#"><img src="../assets/images/n_img1.jpg" width="236" height="200" /></a>
                    <a href="#"><img src="../assets/images/n_img2.jpg" width="236" height="200" /></a>
                  </div>
                </div>
              </li>
              <li>
                <div class="fj">
                  <span class="n_img"><span></span><img src="../assets/images/nav10.png" /></span>
                  <span class="fl">礼品、充值</span>
                </div>
                <div class="zj" style="top:-360px;">
                  <div class="zj_l">
                    <div class="zj_l_c">
                      <h2>零食 / 糖果 / 巧克力10</h2>
                      <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                      <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                      <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                    </div>
                  </div>
                  <div class="zj_r">
                    <a href="#"><img src="../assets/images/n_img1.jpg" width="236" height="200" /></a>
                    <a href="#"><img src="../assets/images/n_img2.jpg" width="236" height="200" /></a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--End 商品分类详情 End-->
        <ul class="menu_r">
          <li> <router-link to="/show"> <a>首页</a></router-link></li>
          <li><a href="Food.html">美食</a></li>
          <li><a href="Fresh.html">生鲜</a></li>
          <li><a href="HomeDecoration.html">家居</a></li>
          <li><a href="SuitDress.html">女装</a></li>
          <li><a href="MakeUp.html">美妆</a></li>
          <li><a href="Digital.html">数码</a></li>
          <li><a href="GroupBuying.html">团购</a></li>
        </ul>
        <div class="m_ad">中秋送好礼！</div>
      </div>
    </div>
    <!--End Menu End-->
    <div class="i_bg">
      <div class="content mar_20">
        &nbsp;<router-link to="/Cart_Two"> <img src="../assets/images/img1.jpg" /></router-link>
      </div>

      <!--Begin 第一步：查看购物车 Begin -->
      <div class="content mar_20">

        <table border="0" class="car_tab" style="width:1200px;  align:center" cellspacing="0" cellpadding="0" >
          <tr>
            <td class="car_th" width="70">
              <input class="input1" type="checkbox" ></td>
            <td class="car_th" width="490">商品名称</td>
            <td class="car_th" width="140">属性</td>
            <td class="car_th" width="150">购买数量</td>
            <td class="car_th" width="130">单价</td>
            <td class="car_th" width="140">金额</td>
            <td class="car_th" width="180">操作</td>
          </tr>
          <tr v-for="(value,key) in cart"  align="center" >
            <td><input type="checkbox" class="input" v-bind:value="value.goodsp_id" v-on:click="checkboxa(value)" name="side"></td>
            <td align="center">
              <div class="c_s_img"><img src="../assets/images/c_1.jpg" width="73" height="73" /></div>
              <div align="center" >{{value.name}}</div>
            </td>
            <td align="center">{{value.goods_attr_name}}</td>
            <td align="center">
              <div class="c_num" >
                <input type="button" v-on:click="greed(value.num -=1,value.goodsp_id)" class="car_btn_1" value="-">
                <!--              当点击时并且传参，当点减得时候减1-->
                <input type="text" v-bind:value="value.num" class="car_ipt">
                <input type="button" v-on:click="greed(value.num +=1,value.goodsp_id)" class="car_btn_1" value="+" >
                <!--              当点击时并且传参，当点加得时候+1 并且将货品的id传过去-->
              </div>
            </td>
            <td align="center" style="color:#ff4e00;">￥{{value.price}}</td>
            <td align="center">￥{{value.num * value.price}}</td>
            <td align="center"><a onclick="ShowDiv('MyDiv','fade')">删除</a>&nbsp; &nbsp;<a href="#">加入收藏</a></td>
          </tr>
          <tr height="70">
            <td colspan="6" style="font-family:'Microsoft YaHei'; border-bottom:0;">
              <label class="r_rad"><input type="checkbox" name="clear" checked="checked" /></label><label class="r_txt">清空购物车</label>
              <span class="fr">商品总价：<b style="font-size:22px; color:#ff4e00;">￥{{totalPrice}}</b></span>
            </td>
          </tr>
          <tr valign="top" height="150">
            <td colspan="6" align="right">
              <a href="#"><img src="../assets/images/buy1.gif" /></a>&nbsp;<span v-on:click="order()"><img src="../assets/images/buy2.gif" /></span>
            </td>
          </tr>
        </table>
      </div>
      <!--End 第一步：查看购物车 End-->

      <!--Begin 弹出层-删除商品 Begin-->
      <div id="fade" class="black_overlay"></div>
      <div id="MyDiv" class="white_content">
        <div class="white_d">
          <div class="notice_t">
            <span class="fr" style="margin-top:10px; cursor:pointer;" onclick="CloseDiv('MyDiv','fade')"><img src="../assets/images/close.gif" /></span>
          </div>
          <div class="notice_c">

            <table border="0" align="center" style="font-size:16px;" cellspacing="0" cellpadding="0">
              <tr valign="top">
                <td>您确定要把该商品移除购物车吗？</td>
              </tr>
              <tr height="50" valign="bottom">
                <td><a href="#" class="b_sure">确定</a><a href="#" class="b_buy">取消</a></td>
              </tr>
            </table>

          </div>
        </div>
      </div>
      <!--End 弹出层-删除商品 End-->


      <!--Begin Footer Begin -->
      <div class="b_btm_bg bg_color">
        <div class="b_btm">
          <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
            <tr>
              <td width="72"><img src="../assets/images/b1.png" width="62" height="62" /></td>
              <td><h2>正品保障</h2>正品行货  放心购买</td>
            </tr>
          </table>
          <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
            <tr>
              <td width="72"><img src="../assets/images/b2.png" width="62" height="62" /></td>
              <td><h2>满38包邮</h2>满38包邮 免运费</td>
            </tr>
          </table>
          <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
            <tr>
              <td width="72"><img src="../assets/images/b3.png" width="62" height="62" /></td>
              <td><h2>天天低价</h2>天天低价 畅选无忧</td>
            </tr>
          </table>
          <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
            <tr>
              <td width="72"><img src="../assets/images/b4.png" width="62" height="62" /></td>
              <td><h2>准时送达</h2>收货时间由你做主</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="b_nav">
        <dl>
          <dt><a href="#">新手上路</a></dt>
          <dd><a href="#">售后流程</a></dd>
          <dd><a href="#">购物流程</a></dd>
          <dd><a href="#">订购方式</a></dd>
          <dd><a href="#">隐私声明</a></dd>
          <dd><a href="#">推荐分享说明</a></dd>
        </dl>
        <dl>
          <dt><a href="#">配送与支付</a></dt>
          <dd><a href="#">货到付款区域</a></dd>
          <dd><a href="#">配送支付查询</a></dd>
          <dd><a href="#">支付方式说明</a></dd>
        </dl>
        <dl>
          <dt><a href="#">会员中心</a></dt>
          <dd><a href="#">资金管理</a></dd>
          <dd><a href="#">我的收藏</a></dd>
          <dd><a href="#">我的订单</a></dd>
        </dl>
        <dl>
          <dt><a href="#">服务保证</a></dt>
          <dd><a href="#">退换货原则</a></dd>
          <dd><a href="#">售后服务保证</a></dd>
          <dd><a href="#">产品质量保证</a></dd>
        </dl>
        <dl>
          <dt><a href="#">联系我们</a></dt>
          <dd><a href="#">网站故障报告</a></dd>
          <dd><a href="#">购物咨询</a></dd>
          <dd><a href="#">投诉与建议</a></dd>
        </dl>
        <div class="b_tel_bg">
          <a href="#" class="b_sh1">新浪微博</a>
          <a href="#" class="b_sh2">腾讯微博</a>
          <p>
            服务热线：<br />
            <span>400-123-4567</span>
          </p>
        </div>
        <div class="b_er">
          <div class="b_er_c"><img src="../assets/images/er.gif" width="118" height="118" /></div>
          <img src="../assets/images/ss.png" />
        </div>
      </div>
      <div class="btmbg">
        <div class="btm">
          备案/许可证编号：蜀ICP备12009302号-1-www.dingguagua.com   Copyright © 2015-2018 尤洪商城网 All Rights Reserved. 复制必究 , Technical Support: Dgg Group <br />
          <img src="../assets/images/b_1.gif" width="98" height="33" /><img src="../assets/images/b_2.gif" width="98" height="33" /><img src="../assets/images/b_3.gif" width="98" height="33" /><img src="../assets/images/b_4.gif" width="98" height="33" /><img src="../assets/images/b_5.gif" width="98" height="33" /><img src="../assets/images/b_6.gif" width="98" height="33" />
        </div>
      </div>
      <!--End Footer End -->
    </div>
  </div>
</template>

<script>
    import Index from "./Index";
    export default {
        name: "Buycart",

        data (){
            return{
                name: '',
                cart: [],
                shopping: [],
                totalPrice: ''
            }
        },
        methods: {
            greed (res,goodsp_id){
                axios.post('http://localhost/blog/public/api/auth/greed',{
                    num:res,
                    token:localStorage.getItem("token"),
                    goodsp_id:goodsp_id

                })
                    .then(res=>{
                        console.log(res.data)
                    })
            },
            checkboxa : function(value){            //单选或者多选商品
                console.log(value)
                //通过点击传形参将数组传下来
                var arr=value.goodsp_id;
                //从数组中取出货品id
                console.log(arr)
                if (this.shopping[arr]==undefined||this.shopping[arr]==''){
                    //如果数组中的货品id为空或未定义
                    this.shopping[arr]=value
                    //
                }else{
                    this.shopping[arr]= '';
                }
                var totalP = 0;
                this.shopping.forEach(function (val) {
                    if (val!=''){
                        totalP+=val.price*val.num;
                    }
                })
                this.totalPrice=totalP
            },
            order () {
                var box_arr=[]
                // 选中的放到一个数组中
                $.each(this.cart,function (key,val) {
                    var box=$('input[name="side"]')
                    // console.log(box)
                    for ( var c in box){
                        if (box[c].checked) box_arr.push(box[c].value)
                    }
                })
                // console.log(box_arr)
                // 定义一个新数组，循环原来的数组，把重复的去掉，放在新数组中
                var new_arr=[];
                for (var i = 0;i<box_arr.length; i++) {
                    var items=box_arr[i];
                    if ($.inArray(items,new_arr)==-1){
                        new_arr.push(items);
                    }
                }
                console.log(new_arr)
                this.$router.push({
                    name :'Cart_Two',
                    params: {
                        new_arr
                    }
                })
                //将这个数组传到cart_two
            }

        },

        mounted (){
            axios.post('http://localhost/blog/public/api/auth/buycart',{
                token:localStorage.getItem("token")
            })
                .then(res => {
                    console.log(res)
                    this.cart = res.data

                })
            this.name=localStorage.getItem('name');
            console.log(name);
        },

    }

</script>

<style scoped>

</style>

