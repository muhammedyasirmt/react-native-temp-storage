package com.tempstorage

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.Promise

abstract class TempStorageSpec internal constructor(context: ReactApplicationContext) :
  ReactContextBaseJavaModule(context) {

    abstract fun setItem(key: String, value: String, promise: Promise)
    abstract fun getItem(key: String, promise: Promise)
    abstract fun deleteItem(key: String, promise: Promise)
}
