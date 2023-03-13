<?php

namespace App\Consts;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
class Consts
{
        //
    //基本情報取得（認証確認含め）
    //
    public static function retUserInfo() {
        $userData = Auth::User();

        $retData = array(
            'user_id' => $userData['user_id'],
            'user_name' => $userData['user_name'],
            'profile' => $userData['profile'],
            'twitter_code' => $userData['twitter_code'],
            'favorite_tag' => $userData['favorite_tag'],
            'mute_tag' => $userData['mute_tag'],
            'mail_address' => $userData['mail_address'],
            'show_twitter' => $userData['show_twitter'],
            'disp_r18' => $userData['disp_r18'],
            'disp_r18g' => $userData['disp_r18g'],
        );

        if ($userData['mail_address'] == '') {
            $retData = $retData + array('auth_mail' => '0');
        } else {
            $retData = $retData + array('auth_mail' => '1');
        }

        if ($userData['twitter_id'] == '') {
            $retData = $retData + array('auth_twitter' => '0');
        } else {
            $retData = $retData + array('auth_twitter' => '1');
        }

        return $retData;
    }

    //
    //メールアドレスチェック
    //
    public static function checkAddress($mailAddress) {
        //メールアドレスの正規表現チェック
        if (preg_match(Consts::REGEX_ADDRESS, $mailAddress) == 0) {
            return false;
        }

        if (strpos($mailAddress, '@') == false) {
            //含まれているか
            return false;
        } else {
            $array = explode('@', $mailAddress);

            if (count($array) != 2) {
                //@複数
                return false;
            } else if (strpos($array[0], '.jp') == false && strpos($array[0], '.com') == false && 
                strpos($array[0], '.net') == false && strpos($array[0], '.org') == false && strpos($array[0], '.xyz') == false) {
                //指定以外
                return false;
            }
        }
        return true;
    }

    public static function aaa() {
        return "A";
    }

    //メールアカウント新規登録申請
    public const MAIL_TITLE_MAIL_NEW_REQ = "【yumedrop】仮登録完了のお知らせ";
    public const MAIL_BODY_MAIL_NEW_REQ = "以下に記載されたアドレス（URL）にアクセスして、メールアドレスの認証を行ってください。\nこのURLは送信より24時間まで有効です。\n\nhttps://yumedrop.com/registrationConfirmation/###\n\n本メールに心当たりのない場合は、\nお手数ですが本メールを破棄いただきますようお願いいたします。\n上記URLにアクセスをしなければ、\n本登録完了とはなりませんので、退会手続きは必要ございません。\n\nこのメールは送信専用です。\nご返信いただいてもお返事できかねますので、あらかじめご了承ください。";
    //メールアカウント新規登録完了
    public const MAIL_TITLE_MAIL_NEW_COMP = "【yumedrop】本登録完了のお知らせ";
    public const MAIL_BODY_MAIL_NEW_COMP = "本登録が完了いたしました。\n以下のアドレス（URL）より、ご利用いただけます。\n\nhttps://yumedrop.com\n\nこのメールは送信専用です。\nご返信いただいてもお返事できかねますので、あらかじめご了承ください。";

    //パスワードリセット申請
    public const MAIL_TITLE_PASS_REQ = "【yumedrop】パスワードの再設定";
    public const MAIL_BODY_PASS_REQ = "パスワードを再設定します。\n\n以下に記載されたアドレス（URL）にアクセスして、新たなパスワードを入力してください。\nこのURLは送信より24時間まで有効です。\n\nhttps://yumedrop.com/resetPassword/###";
    //パスワードリセット完了
    public const MAIL_TITLE_PASS_COMP = "【yumedrop】パスワードの再設定完了のお知らせ";
    public const MAIL_BODY_PASS_COMP = "パスワードの再設定が完了しました。\n引き続き、以下のアドレス（URL）より、ご利用いただけます。\n\nhttps://yumedrop.com\n\nこのメールは送信専用です。\nご返信いただいてもお返事できかねますので、あらかじめご了承ください。";

    //メールアカウント追加申請
    public const MAIL_TITLE_MAIL_ADD_REQ = "【yumedrop】メールアドレス仮登録完了のお知らせ";
    public const MAIL_BODY_MAIL_ADD_REQ = "以下に記載されたアドレス（URL）にアクセスして、メールアドレスの認証を行ってください。\nこのURLは送信より24時間まで有効です。\n\nhttps://yumedrop.com/registrationConfirmation/###\n\n本メールに心当たりのない場合は、\nお手数ですが本メールを破棄いただきますようお願いいたします。\n上記URLにアクセスをしなければ、\n本登録完了とはなりませんので、退会手続きは必要ございません。\n\nこのメールは送信専用です。\nご返信いただいてもお返事できかねますので、あらかじめご了承ください。";
    //メールアカウント追加完了
    public const MAIL_TITLE_MAIL_ADD_COMP = "【yumedrop】メールアドレス本登録完了のお知らせ";
    public const MAIL_BODY_MAIL_ADD_COMP = "メールアドレスの本登録が完了いたしました。\n以下のアドレス（URL）より、ご利用いただけます。\n\nhttps://yumedrop.com\n\nこのメールは送信専用です。\nご返信いただいてもお返事できかねますので、あらかじめご了承ください。";

    //メールアドレス変更申請
    public const MAIL_TITLE_MAIL_CHANGE_REQ = "【yumedrop】メールアドレスの変更";
    public const MAIL_BODY_MAIL_CHANGE_REQ = "メールアドレスを変更します。\n\n以下に記載されたアドレス（URL）にアクセスして、メールアドレスの認証を行ってください。\nこのURLは送信より24時間まで有効です。\n\nhttps://yumedrop.com/registrationConfirmation/###\n\n本メールに心当たりのない場合は、\nお手数ですが本メールを破棄いただきますようお願いいたします。\n上記URLにアクセスをしなければ、\n認証完了とはなりませんので、このメールアドレスでの退会手続きは必要ございません。\n\nこのメールは送信専用です。\nご返信いただいてもお返事できかねますので、あらかじめご了承ください。";
    //メールアドレス変更完了
    public const MAIL_TITLE_MAIL_CHANGE_COMP = "【yumedrop】メールアドレス変更完了のお知らせ";
    public const MAIL_BODY_MAIL_CHANGE_COMP = "メールアドレスの変更が完了しました。\n引き続き、以下のアドレス（URL）より、ご利用いただけます。\n\nhttps://yumedrop.com\n\nこのメールは送信専用です。\nご返信いただいてもお返事できかねますので、あらかじめご了承ください。";
    
    public const MAIL_COMMON_FOOTER = "\n\n=============================\nyumedrop\nhttps://yumedrop.com\n\n▼お問い合わせは\nhttps://yumedrop.com/contact\n\n▼利用規約\nhttps://yumedrop.com/terms\n\n▼プライバシーポリシー\nhttps://yumedrop.com/privacypolicy\n=============================    ";

    public const TEST = "1";
    public const API_SUCCESS = "200";

    public const API_FAILED_LOGIN = "99";
    public const API_FAILED_AUTH = "100";

    public const API_FAILED_PARAM = "300";

    public const API_FAILED_NODATA = "400";
    public const API_FAILED_DUPLICATE = "401";
    public const API_FAILED_MISMATCH = "402";
    public const API_FAILED_LIMIT = "403";
    public const API_FAILED_SESSION = "419";

    public const API_FAILED_PRIVATE = "500";
    public const API_FAILED_FILE = "600";
    public const API_FAILED_PUBLISHING = "700";

    public const API_FAILED_EXEPTION = "900";

    // public const REGEX_PASSWORD = "/^[a-z0-9#!?&$%+-]{0,32}$/i";
    public const REGEX_PASSWORD = "/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9#!?&$%+-]+$/";
    // public const REGEX_URL = "/https?:\/\/[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#\u3000-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3]+/g";
    public const REGEX_ADDRESS = "/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/";





















    public const CONVERSION1 = "#::::::::::::::::::::::::::#";
    public const CONVERSION2 = "#,,,,,,,,,,,,,,,,,,,,,,,,,,#";
    
    public const TWITTER_API_KEY = "lx1A8j00xDo41tFuSTtuguUwp";
    public const TWITTER_API_SECRET = "quirTXTN0SW2xUvVHrb50Ja9idNKlFCngfP30QiZ4QLkjyU8Av";

}
