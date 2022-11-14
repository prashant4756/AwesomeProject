package com.awesomeproject.imagepicker

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager

class ImagePickerPackage: ReactPackage {
    override fun createNativeModules(reactApplicationContext: ReactApplicationContext): MutableList<NativeModule> {
        return mutableListOf(ImagePickerModule(reactApplicationContext))
    }

    override fun createViewManagers(p0: ReactApplicationContext): MutableList<ViewManager<View, ReactShadowNode<*>>> {
        return mutableListOf()
    }
}