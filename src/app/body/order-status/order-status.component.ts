import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BackendService } from 'src/app/services/backend/backend.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  status: string = "Checking"
  orderId: string = ""
  paymentId: string = ""
  signature: string = ""
  date: string

  constructor(
    private route: ActivatedRoute,
    public functions: AngularFireFunctions,
    private authService: AuthService,
    private backendService: BackendService,
  ) { }

  ngOnInit(): void {
    // this.authService.readData();
    // this.backendService.readRawData();
    this.orderId = this.route.snapshot.params['orderId'];
    this.paymentId = this.route.snapshot.params['paymentId'];
    this.signature = this.route.snapshot.params['signature'];
    this.verifyOrderStatus();
  }

  async verifyOrderStatus() {
    const callable = this.functions.httpsCallable('paymentVerification');
    try {
      await callable({
        OrderId: this.orderId,
        PaymentId: this.paymentId,
        Signature: this.signature,
      }).toPromise().then((res) => {
        console.log(res);

        if(this.authService.billingAddress != undefined) {
          this.placeOrder();
        } else {
          alert("Address Not found!!! Please contact support with order id: " + this.orderId);
        }
      }).catch((error) => {
        this.status = "failed";
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async placeOrder() {
    const d = new Date();
    this.date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
    const callable = this.functions.httpsCallable('order');
    try {
      const result = await callable({
        UserUid: this.authService.user.uid,
        UserEmail: this.authService.user.email,
        UserName: this.authService.user.displayName,
        ShippingAddress: this.authService.billingAddress,
        RazorPayOrderId: this.orderId,
        Date: this.date,
        Mode: "PLACE_ORDER",
      }).toPromise().then(() => {
        this.status = "Success";
      }).catch((error) => {
        console.log(error);
      });
      console.log(result);
    } catch (error) { }
  }

}
