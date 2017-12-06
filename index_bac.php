<?php
function get_visitors_ip()
{
    if (isset($_SERVER['HTTP_CF_CONNECTING_IP'])) return $_SERVER['HTTP_CF_CONNECTING_IP'];
    if (isset($_SERVER['HTTP_X_REAL_IP'])) $ip = $_SERVER['HTTP_X_REAL_IP'];
    elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else $ip = $_SERVER['REMOTE_ADDR'];
    return $ip;
}
function cityByIp($ip = null)
{
    if (empty($ip)) $ip = get_visitors_ip();
    if (!preg_match('@^\d+\.\d+\.\d+\.\d+$@', $ip)) return null;

    $query = @unserialize(file_get_contents('http://ip-api.com/php/' . $ip));

    if ($query && $query['status'] == 'success' && !empty($query['countryCode'])) return $query['countryCode'];

    return null;
}
$city = cityByIp();
if($city == 'BY' || $city=='RU' || $city=='UA'){
    readfile('index.html');
}else{
    readfile('en.html');
}
