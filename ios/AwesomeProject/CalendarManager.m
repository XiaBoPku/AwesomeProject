//
//  CalendarManager.m
//  AwesomeProject
//
//  Created by xiabo on 2018/4/10.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "CalendarManager.h"

#import <React/RCTLog.h>

@implementation CalendarManager
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
