//
//  CalendarManager.m
//  AwesomeProject
//
//  Created by xiabo on 2018/4/10.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "CalendarManager.h"

#import <React/RCTLog.h>
#import <React/RCTConvert.h>
#import <Foundation/Foundation.h>

@implementation CalendarManager
RCT_EXPORT_MODULE();

//RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
//{
//  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
//}

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)secondsSinceUnixEpoch)
{
  NSDate *date = [RCTConvert NSDate:secondsSinceUnixEpoch];
  RCTLog(@"TIME-->%@", date);
}

@end
