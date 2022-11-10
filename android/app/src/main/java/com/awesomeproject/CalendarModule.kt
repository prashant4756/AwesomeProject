package com.awesomeproject

import android.util.Log
import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class CalendarModule(reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "CalendarModule"
    }

    @ReactMethod
    fun createCalendarEvent(eventName:String, location: String) {
        Log.d("CalendarModule", "Kotlin Create event called with name: $eventName and location: $location")
        Toast.makeText(reactApplicationContext, "Kotlin Create event called with name: $eventName and location: $location", Toast.LENGTH_SHORT).show()
    }

    override fun getConstants(): MutableMap<String, String> {
        return mutableMapOf<String, String>(Pair("eventName1","1"), Pair("eventName2","2"))
    }
}