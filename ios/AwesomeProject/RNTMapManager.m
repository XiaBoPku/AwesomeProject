//
//  RNTMapManager.m
//  AwesomeProject
//
//  Created by xiabo on 2018/4/10.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <MapKit/MapKit.h>

#import <React/RCTViewManager.h>


@interface RNTMapManager : RCTViewManager
@end

@implementation RNTMapManager
RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[MKMapView alloc] init];
}
@end
