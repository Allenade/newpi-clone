"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TradingForm() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [piAmount, setPiAmount] = useState(""); // Stores PI amount
  const piRate = 65; // Fixed rate of $100 per Pi

  // Calculate total price based on user input
  const totalPrice = piAmount ? Number(piAmount) * piRate : 0;
  const renderPaymentInput = () => {
    switch (paymentMethod) {
      case "bank":
        return (
          <div className="space-y-4">
            {/* Bank Name Field */}
            <div className="space-y-2">
              <Label htmlFor="bankName" className="text-[#583A89] text-sm">
                Bank Name:
              </Label>
              <Input
                id="bankName"
                type="text"
                className="w-full border-[#583A89] hover:border-[#583A89]/80 focus:ring-[#583A89] rounded"
                placeholder="Enter your bank name"
              />
            </div>

            {/* Bank Account Number Field */}
            <div className="space-y-2">
              <Label htmlFor="accountNumber" className="text-[#583A89] text-sm">
                Bank Account Number:
              </Label>
              <Input
                id="accountNumber"
                type="text"
                className="w-full border-[#583A89] hover:border-[#583A89]/80 focus:ring-[#583A89] rounded"
                placeholder="Enter your account number"
              />
            </div>
          </div>
        );

      case "paypal":
        return (
          <div className="space-y-2">
            <Label htmlFor="paypalEmail" className="text-[#583A89] text-sm">
              PayPal Email:
            </Label>
            <Input
              id="paypalEmail"
              type="email"
              className="w-full border-[#583A89] hover:border-[#583A89]/80 focus:ring-[#583A89] rounded"
              placeholder="Enter your PayPal email"
            />
          </div>
        );

      case "crypto":
        return (
          <div className="space-y-2">
            <Label htmlFor="walletAddress" className="text-[#583A89] text-sm">
              Crypto Wallet Address:
            </Label>
            <Input
              id="walletAddress"
              type="text"
              className="w-full border-[#583A89] hover:border-[#583A89]/80 focus:ring-[#583A89] rounded"
              placeholder="Enter your wallet address"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      {/* Main lavender background container */}
      <div className="bg-[#F8F5FF] p-6 rounded-lg">
        {/* White container with shadow */}
        <div className="bg-white rounded-lg shadow-md p-[1px]">
          {/* Light gray border container */}
          <div className="border border-gray-200 rounded-lg">
            {/* White content container */}
            <div className="bg-white p-8 rounded-lg relative">
              {/* Centered content */}
              <div className="flex flex-col items-center">
                {/* PI Symbol floating on top */}
                <div className="w-24 h-24 bg-[#583A89] rounded-full flex items-center justify-center absolute -top-12 left-1/2 transform -translate-x-1/2 shadow-lg">
                  <span className="text-8xl text-white font-bold">π</span>
                </div>

                {/* Rate display */}
                {/* Rate Display */}
                <div className="text-center mt-16 mb-8">
                  <h2 className="text-[#583A89] text-2xl font-bold">
                    Current PI coin Rate: $65 per coin
                  </h2>
                </div>

                <div className="w-full max-w-md space-y-6">
                  {/* Number of PI Coins */}
                  <div className="space-y-2">
                    <Label htmlFor="coins" className="text-[#583A89] text-sm">
                      Number of PI Coins to sell (minimum 1):
                    </Label>
                    <Input
                      id="coins"
                      type="number"
                      min="1"
                      value={piAmount}
                      onChange={(e) => setPiAmount(e.target.value)}
                      className="w-full border-[#583A89] hover:border-[#583A89]/80 focus:ring-[#583A89] rounded"
                      placeholder="Enter amount"
                    />
                  </div>

                  {/* Calculated Total Price */}
                  {piAmount && (
                    <div className="text-center mt-4">
                      <h3 className="text-xl font-semibold text-[#583A89]">
                        Total Amount: ${totalPrice.toFixed(2)}
                      </h3>
                    </div>
                  )}

                  {/* Currency Selection */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="currency"
                      className="text-[#583A89] text-sm"
                    >
                      Select your currency:
                    </Label>
                    <Select>
                      <SelectTrigger
                        id="currency"
                        className="w-full border-[#583A89] hover:border-[#583A89]/80 focus:ring-[#583A89] rounded"
                      >
                        <SelectValue placeholder="Select Currency" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="aud">
                          AUD - Australian Dollar
                        </SelectItem>
                        <SelectItem value="brl">
                          BRL - Brazilian Real
                        </SelectItem>
                        <SelectItem value="cad">
                          CAD - Canadian Dollar
                        </SelectItem>
                        <SelectItem value="chf">CHF - Swiss Franc</SelectItem>
                        <SelectItem value="cny">CNY - Chinese Yuan</SelectItem>
                        <SelectItem value="eur">EUR - Euro</SelectItem>
                        <SelectItem value="gbp">GBP - British Pound</SelectItem>
                        <SelectItem value="hkd">
                          HKD - Hong Kong Dollar
                        </SelectItem>
                        <SelectItem value="inr">INR - Indian Rupee</SelectItem>
                        <SelectItem value="jpy">JPY - Japanese Yen</SelectItem>
                        <SelectItem value="krw">
                          KRW - South Korean Won
                        </SelectItem>
                        <SelectItem value="mxn">MXN - Mexican Peso</SelectItem>
                        <SelectItem value="nok">
                          NOK - Norwegian Krone
                        </SelectItem>
                        <SelectItem value="nzd">
                          NZD - New Zealand Dollar
                        </SelectItem>
                        <SelectItem value="rub">RUB - Russian Ruble</SelectItem>
                        <SelectItem value="sek">SEK - Swedish Krona</SelectItem>
                        <SelectItem value="sgd">
                          SGD - Singapore Dollar
                        </SelectItem>
                        <SelectItem value="try">TRY - Turkish Lira</SelectItem>
                        <SelectItem value="usd">USD - US Dollar</SelectItem>
                        <SelectItem value="zar">
                          ZAR - South African Rand
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Payment Method Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="payment" className="text-[#583A89] text-sm">
                      Choose how to receive money:
                    </Label>
                    <Select onValueChange={setPaymentMethod}>
                      <SelectTrigger
                        id="payment"
                        className="w-full border-[#583A89] hover:border-[#583A89]/80 focus:ring-[#583A89] rounded"
                      >
                        <SelectValue placeholder="Select a payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bank">Bank Transfer</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                        <SelectItem value="crypto">Crypto Wallet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Dynamic Payment Input */}
                  {renderPaymentInput()}

                  {/* Submit Button (Only shows when a payment method is selected) */}
                  {paymentMethod && (
                    <div className="pt-4">
                      <Link href="/pi/validate" passHref>
                        <Button className="w-full bg-[#583A89] hover:bg-[#583A89]/90 text-white">
                          Submit
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
