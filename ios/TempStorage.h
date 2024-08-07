
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNTempStorageSpec.h"

@interface TempStorage : NSObject <NativeTempStorageSpec>
#else
#import <React/RCTBridgeModule.h>

@interface TempStorage : NSObject <RCTBridgeModule>
@property (nonatomic, strong) NSMutableDictionary<NSString *, NSString *> *tempStorage;
#endif

@end
