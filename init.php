<?php
    $countries = array(
        'ar' => "ar,dz,bh,dj,eg,il,jo,iq,ye,qa,km,kw,lb,ly,mr,ma,ae,om,er,sa,sy,so,sd,tn,td,ps",
        'de' => "de,at,li,ch,lu,be,br,va,dk,it,na,py,pl,pl,sk,fr",
        'es' => "mx,es,co,ar,pe,ve,cl,cu,ec,do,gt,hn,bo,sv,ni,py,cr,pr,uy,pa,ph,pt,ht,ma,it,gq,au,bz,cw,ad,tt,nz",
        'jp' => "jp,gu,tw,pe",
        'kr' => "kr",
        'ru' => "ru,ua,uk,kg,kz,by",
        'zh' => "kp,zh,sg",
    );
    
    function get_country()
    {
        $ip = $_SERVER["REMOTE_ADDR"];
        
        if (filter_var(@$_SERVER['HTTP_X_FORWARDED_FOR'], FILTER_VALIDATE_IP))
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    
        if (filter_var(@$_SERVER['HTTP_CLIENT_IP'], FILTER_VALIDATE_IP))
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        
        if (filter_var($ip, FILTER_VALIDATE_IP))
        {
            $ipdat = json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=". $ip));
            return @$ipdat->geoplugin_countryCode;
        }
    }
    
    $lang = "en";
    $country = strtolower(get_country());
    foreach ( $countries as $country_lang => $list )
    {
        if( in_array($country, explode(',', $list)) )
            $lang = $country_lang;
    }
    
    $current_lang = $_SERVER['REQUEST_URI'];
    $current_lang = explode('/', $current_lang);
    $current_lang = array_splice($current_lang, 1, 1);
    $current_lang = substr($current_lang[0], 0, 2);
    if ( $current_lang != $lang && @$_COOKIE['langchangedbyhand'] != "changed" )
        header(  "Location: /". ( $lang == "en" ? "" : $lang ) );
?>