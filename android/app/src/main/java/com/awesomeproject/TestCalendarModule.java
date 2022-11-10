package com.awesomeproject;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class TestCalendarModule extends ReactContextBaseJavaModule {

    public TestCalendarModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void createCalendarEvent(String eventName, String location) {
        Log.d("CalendarModule", "Create event called with name: "+eventName+" and location:"+location);
    }
}
