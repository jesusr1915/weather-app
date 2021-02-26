//
//  ViewDetail.m
//  srpagorn
//
//  Created by Mac on 25/02/21.
//

#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(ViewDetailManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(cityName, NSString)
RCT_EXPORT_VIEW_PROPERTY(temperature, NSString)
@end

