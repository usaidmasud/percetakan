<?php

namespace App\Http\Controllers\Master;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class KategoriController extends Controller
{
    
    public function __construct()
    {
       
    }
    
    function index()
    {
        return view('master/kategori/index');
    }
}
