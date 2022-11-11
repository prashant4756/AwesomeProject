package com.awesomeproject

import android.util.Log
import android.widget.Toast
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.util.UUID

class CalendarModule(reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "CalendarModule"
    }

    var flip =  false;

    @ReactMethod
    fun createCalendarEvent(eventName:String, location: String, callBack: Callback) {
        Log.d("CalendarModule", "Kotlin Create event called with name: $eventName and location: $location")
        Toast.makeText(reactApplicationContext, "Kotlin Create event called with name: $eventName and location: $location", Toast.LENGTH_SHORT).show()
        callBack.invoke(null, "eventId:${UUID.randomUUID()}")
    }

    @ReactMethod
    fun createCalendarEventSuccessError(eventName:String, location: String, errorCallback: Callback, successCallback: Callback) {
        Log.d("CalendarModule", "Kotlin Create event called with name: $eventName and location: $location")
        Toast.makeText(reactApplicationContext, "Kotlin Create event called with name: $eventName and location: $location", Toast.LENGTH_SHORT).show()
        if(flip) {
            errorCallback.invoke("RandomException")
        } else {
            successCallback.invoke("eventId:${UUID.randomUUID()}")
        }
        flip = !flip
    }

    @ReactMethod
    fun createCalendarEventPromise(eventName:String, location: String, promise: Promise) {
        Log.d("CalendarModule", "Kotlin Create event called with name: $eventName and location: $location")
        Toast.makeText(reactApplicationContext, "Kotlin Create event called with name: $eventName and location: $location", Toast.LENGTH_SHORT).show()
        if(flip) {
            promise.reject(Exception("RandomException"));
        } else {
            promise.resolve("eventId:${UUID.randomUUID()}")
        }
        flip = !flip
    }



    override fun getConstants(): MutableMap<String, String> {
        return mutableMapOf<String, String>(Pair("eventName1","1"), Pair("eventName2","2"))
    }
}