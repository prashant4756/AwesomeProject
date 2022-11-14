package com.awesomeproject.imagepicker

import android.app.Activity
import android.content.Intent
import android.util.Log
import android.widget.Toast
import com.facebook.react.bridge.*

class ImagePickerModule(reactApplicationContext: ReactApplicationContext): ReactContextBaseJavaModule(reactApplicationContext) {

    private var pickerPromise: Promise? = null

    private var activityEventListener = object : BaseActivityEventListener() {
        override fun onActivityResult(activity: Activity?, requestCode: Int, resultCode: Int, intent: Intent?) {
            if(requestCode == IMAGE_PICKER_REQUEST) {
                pickerPromise?.let { promise ->
                    when(resultCode) {
                        Activity.RESULT_OK -> {
                            val uri = intent?.data
                            uri?.let {
                                promise.resolve(uri.toString())
                            } ?: kotlin.run {
                                promise.reject(E_NO_IMAGE_DATA_FOUND, "No image data found")
                            }
                        }

                        Activity.RESULT_CANCELED -> {
                            promise.reject(E_PICKER_CANCELLED, "Picker Cancelled")
                        }
                    }
                    pickerPromise = null
                }
            }
        }
    }

    init {
        reactApplicationContext.addActivityEventListener(activityEventListener)
    }

    override fun getName(): String {
        return "ImagePickerModule"
    }

    @ReactMethod
    fun pickImage(promise: Promise) {
        Log.d("ImagePickerModule", "pick image called")
        Toast.makeText(reactApplicationContext, "pick image", Toast.LENGTH_SHORT).show()

        val activity = currentActivity
        if (activity == null) {
            promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist")
            return
        }
        pickerPromise = promise

        try {
            val galleryIntent = Intent(Intent.ACTION_PICK).apply { type = "image/*" }
            val chooserIntent = Intent.createChooser(galleryIntent, "Pick an image")
            activity.startActivityForResult(chooserIntent, IMAGE_PICKER_REQUEST)
        } catch (e: Exception) {
            pickerPromise?.reject(E_FAILED_TO_SHOW_PICKER, e)
            pickerPromise = null
        }
    }

    companion object {
        const val IMAGE_PICKER_REQUEST = 1
        const val E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST"
        const val E_PICKER_CANCELLED = "E_PICKER_CANCELLED"
        const val E_FAILED_TO_SHOW_PICKER = "E_FAILED_TO_SHOW_PICKER"
        const val E_NO_IMAGE_DATA_FOUND = "E_NO_IMAGE_DATA_FOUND"
    }
}