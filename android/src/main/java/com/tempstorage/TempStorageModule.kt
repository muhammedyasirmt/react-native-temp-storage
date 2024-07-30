package com.tempstorage

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class TempStorageModule internal constructor(context: ReactApplicationContext) :
  TempStorageSpec(context) {

  // Declare tempStorage as a static property in the companion object
  companion object {
    private val tempStorage = mutableMapOf<String, String>()

    const val NAME = "TempStorage"
    
    fun getTempStorage(): MutableMap<String, String> {
      return tempStorage
    }
  }

  override fun getName(): String {
    return NAME
  }

  @ReactMethod
  override fun setItem(key: String, value: String, promise: Promise) {
    getTempStorage()[key] = value
    promise.resolve(null)
  }

  @ReactMethod
  override fun getItem(key: String, promise: Promise) {
    promise.resolve(getTempStorage()[key])
  }

  @ReactMethod
  override fun deleteItem(key: String, promise: Promise) {
    getTempStorage().remove(key)
    promise.resolve(null)
  }
}
