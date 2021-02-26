//
//  ViewDetail.swift
//  srpagorn
//
//  Created by Jesus Romero on 25/02/21.
//

import UIKit

class ViewDetail: UIView {
  
  @IBOutlet weak var nameLbl: UILabel!
  @IBOutlet weak var temperatureLbl: UILabel!
  
  @objc var cityName = "Tlahita la bella" {
    didSet {
      self.setupView()
    }
  }
  
  @objc var temperature = "temperature" {
    didSet {
      self.setupView()
    }
  }

  override init(frame: CGRect) {
     super.init(frame: frame)
     setupView()
   }
  
   required init?(coder aDecoder: NSCoder) {
     super.init(coder: aDecoder)
     setupView()
   }
  
  private func setupView() {
    //self.backgroundColor = .green
    guard nameLbl != nil,
          temperatureLbl != nil else { return }
    nameLbl.text = cityName
    temperatureLbl.text = temperature
  
    }

}
