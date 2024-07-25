package com.tempstorage

import com.facebook.react.bridge.ReactApplicationContext

abstract class TempStorageSpec internal constructor(context: ReactApplicationContext) :
  NativeTempStorageSpec(context) {
}
