<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Consts\Consts;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use App\Models\Item;
use App\Models\Category;

use Abraham\TwitterOAuth\TwitterOAuth;

class MainController extends Controller
{
    //
    // カテゴリー一覧取得
    //
    public function getCategoryList(): JsonResponse {

        $categoryList = DB::table('categories')->get();
        return response()->json(['status' => Consts::API_SUCCESS, 'categoryList' => $categoryList]); 
    }

    //
    // アイテムデータ取得
    //
    public function getItemData(Request $request): JsonResponse {
        //入力チェック
        try {
            $validatedData = $request->validate([
                'categoryId' => 'required|string',
            ]);
        } catch (ValidationException $e) {
            return response()->json(['status' => Consts::API_FAILED_PARAM, 'errMsg' => $e->getMessage()]);
        }

        $catId = $request->categoryId;

        //カテゴリーデータ
        $catData = DB::table('categories')->where('category_id', $catId)->first();

        if ($catData == null) {
            //データなし
            return response()->json(['status' => Consts::API_FAILED_NODATA, 'errMsg' => '']);
        }

        //ティア用データ
        $itemList = DB::table('items')->where('category_id', $catId)->get();
        
        return response()->json(['status' => Consts::API_SUCCESS, 'categoryData' => $catData, 'itemList' => $itemList]); 
    }
}
