//
//  ViewDetailManager.swift
//  srpagorn
//
//  Created by Jesus Romero on 25/02/21.
//

@objc (ViewDetailManager)
class ViewDetailManager: RCTViewManager {

  override static func requiresMainQueueSetup() -> Bool {
      return true
    }

    override func view() -> UIView! {
      //Get all views in the xib
      let allViewsInXibArray = Bundle.main.loadNibNamed("ViewDetailController", owner: ViewDetail(), options: nil)

      //If you only have one view in the xib and you set it's class to MyView class
      if let myView = allViewsInXibArray?.first as? ViewDetail{
        return myView
      }

      return ViewDetail()
    }

}
