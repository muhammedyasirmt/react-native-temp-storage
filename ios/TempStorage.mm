#import "TempStorage.h"

@implementation TempStorage
RCT_EXPORT_MODULE()

- (instancetype)init {
  self = [super init];
  if (self) {
    _tempStorage = [NSMutableDictionary new];
  }
  return self;
}

RCT_EXPORT_METHOD(setItem:(NSString *)key value:(NSString *)value resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
  @try {
    self.tempStorage[key] = value;
    resolve(nil);
  }
  @catch (NSException *exception) {
    reject(@"set_item_error", @"Failed to set item", nil);
  }
}

RCT_EXPORT_METHOD(getItem:(NSString *)key resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
  @try {
    NSString *value = self.tempStorage[key];
    resolve(value);
  }
  @catch (NSException *exception) {
    reject(@"get_item_error", @"Failed to get item", nil);
  }
}

RCT_EXPORT_METHOD(deleteItem:(NSString *)key resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
  @try {
    [self.tempStorage removeObjectForKey:key];
    resolve(nil);
  }
  @catch (NSException *exception) {
    reject(@"delete_item_error", @"Failed to delete item", nil);
  }
}

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeTempStorageSpecJSI>(params);
}
#endif

@end
