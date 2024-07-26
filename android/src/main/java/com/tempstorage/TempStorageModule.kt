package com.tempstorage

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class TempStorageModule internal constructor(context: ReactApplicationContext) :
  TempStorageSpec(context) {
    private val tempStorage = mutableMapOf<String, String>()

  override fun getName(): String {
    return NAME
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  override fun setItem(key: String, value: String, promise: Promise) {
    tempStorage[key] = value
    promise.resolve(null)
  }

  @ReactMethod
  override fun getItem(key: String, promise: Promise) {
    promise.resolve(tempStorage[key])
  }

  @ReactMethod
  override fun deleteItem(key: String, promise: Promise) {
    tempStorage.remove(key) != null
    promise.resolve(null)
  }

  companion object {
    const val NAME = "TempStorage"
  }
}
