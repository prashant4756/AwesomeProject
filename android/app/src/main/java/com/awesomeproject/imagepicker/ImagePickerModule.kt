package com.awesomeproject.imagepicker

import android.app.Activity
import android.content.Intent
import android.net.Uri
import android.os.Environment
import android.os.Handler
import android.os.Looper
import android.provider.MediaStore
import android.util.Log
import android.widget.Toast
import androidx.core.content.FileProvider
import com.awesomeproject.BuildConfig
import com.facebook.react.bridge.*
import java.io.File
import java.io.IOException
import java.text.SimpleDateFormat
import java.util.*


class ImagePickerModule(reactApplicationContext: ReactApplicationContext): ReactContextBaseJavaModule(reactApplicationContext) {

    private var pickerPromise: Promise? = null
    private var cameraPromise: Promise? = null

    private var activityEventListener = object : BaseActivityEventListener() {
        override fun onActivityResult(activity: Activity?, requestCode: Int, resultCode: Int, intent: Intent?) {
            Log.d(TAG, "on activity result ${intent?.data}")
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

            if(requestCode == REQUEST_IMAGE_CAPTURE) {
                cameraPromise?.let { promise ->
                    when(resultCode) {
                        Activity.RESULT_OK -> {
                            Log.d(TAG, currentPhotoUri.toString())
                            promise.resolve(currentPhotoUri.toString())
                        }

                        Activity.RESULT_CANCELED -> {
                            promise.reject(E_PICKER_CANCELLED, "Picker Cancelled")
                        }
                    }
                    cameraPromise = null
                }
            }
        }
    }

    private var lifeCycleEventListener = object : LifecycleEventListener {
        override fun onHostDestroy() {
            Log.d(TAG, "onHostDestroy")
        }

        override fun onHostPause() {
            Log.d(TAG, "onHostPause")
        }

        override fun onHostResume() {
            Log.d(TAG, "onHostResume")
        }
    }

    init {
        reactApplicationContext.addActivityEventListener(activityEventListener)
        reactApplicationContext.addLifecycleEventListener(lifeCycleEventListener)
    }

    override fun getName(): String {
        return TAG
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

    var currentPhotoUri: Uri? = null
    var imageFilePath: String? = null

    @ReactMethod
    fun launchCamera(promise: Promise) {
        Log.d(TAG, "inside launch camera")
        val activity = currentActivity
        if (activity == null) {
            promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist")
            return
        }

        cameraPromise = promise
        openCameraIntent()
    }


    @Throws(IOException::class)
    private fun createImageFile(): File? {
        val timeStamp = SimpleDateFormat(
            "yyyyMMdd_HHmmss",
            Locale.getDefault()
        ).format(Date())
        val imageFileName = "IMG_" + timeStamp + "_"
        val storageDir: File = currentActivity?.getExternalFilesDir(Environment.DIRECTORY_PICTURES) ?: return null
        val image = File.createTempFile(
            imageFileName,  /* prefix */
            ".jpg",  /* suffix */
            storageDir /* directory */
        )
        imageFilePath = image.absolutePath
        return image
    }

    private fun openCameraIntent() {
        val pictureIntent = Intent(
            MediaStore.ACTION_IMAGE_CAPTURE)
        val activity = currentActivity ?: return
        if(pictureIntent.resolveActivity(activity.packageManager) != null){
            //Create a file to store the image
            var photoFile :File? = null
            try {
                photoFile = createImageFile()
            } catch (ex: IOException) {
                // Error occurred while creating the File
            }
            if (photoFile != null) {
                val photoURI = FileProvider.getUriForFile(currentActivity!!,AUTHORITY, photoFile)
                currentPhotoUri = photoURI
                pictureIntent.putExtra(MediaStore.EXTRA_OUTPUT, photoURI)
                currentActivity?.startActivityForResult(pictureIntent,
                    REQUEST_IMAGE_CAPTURE)
            }
        }
    }

    private val AUTHORITY: String = BuildConfig.APPLICATION_ID + ".provider"
    companion object {
        const val TAG = "ImagePickerModule"
        const val IMAGE_PICKER_REQUEST = 1
        const val REQUEST_IMAGE_CAPTURE = 2
        const val E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST"
        const val E_PICKER_CANCELLED = "E_PICKER_CANCELLED"
        const val E_FAILED_TO_SHOW_PICKER = "E_FAILED_TO_SHOW_PICKER"
        const val E_NO_IMAGE_DATA_FOUND = "E_NO_IMAGE_DATA_FOUND"
    }
}