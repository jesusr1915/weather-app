package com.srpagorn;

import android.content.Context;
import android.view.LayoutInflater;
import android.widget.FrameLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;

public class ViewDetailManager extends ViewGroupManager<FrameLayout> {

    public static final String REACT_NAME = "ViewDetail";

    @NonNull
    @Override
    public String getName() {
        return REACT_NAME;
    }

    @NonNull
    @Override
    protected FrameLayout createViewInstance(@NonNull ThemedReactContext reactContext) {

        LayoutInflater inflater = (LayoutInflater)reactContext.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        FrameLayout frameLayout = (FrameLayout) inflater.inflate(R.layout.view_detail, null);

        return frameLayout;
    }

    @ReactProp(name="cityName")
    public void setCityName(FrameLayout frameLayout, String cityName){
        TextView cityText = frameLayout.findViewById(R.id.cityName);
        cityText.setText(cityName);
    }

    @ReactProp(name="temperature")
    public void setTemperature(FrameLayout frameLayout, String temperature){

        TextView temperatureText = frameLayout.findViewById(R.id.temperature);
        temperatureText.setText(temperature);

    }
}
