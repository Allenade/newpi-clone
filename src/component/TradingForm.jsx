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
  const [paymentMethod, setPaymentMethod] = useState();

  const renderPaymentInput = () => {
    switch (paymentMethod) {
      case "bank":
        return (
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

                {/* Rate display with proper spacing from floating icon */}
                <div className="text-center mt-16 mb-8">
                  <h2 className="text-[#583A89] text-2xl font-bold">
                    Current PI coin Rate: 32.00 USD per coin
                  </h2>
                </div>

                {/* Form inputs container */}
                <div className="w-full max-w-md space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="coins" className="text-[#583A89] text-sm">
                      Number of PI Coins to sell (minimum 1):
                    </Label>
                    <Input
                      id="coins"
                      type="number"
                      min="1"
                      className="w-full border-[#583A89] hover:border-[#583A89]/80 focus:ring-[#583A89] rounded"
                      placeholder="Enter amount"
                    />
                  </div>

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
                        <SelectValue placeholder="USD" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD</SelectItem>
                        <SelectItem value="eur">EUR</SelectItem>
                        <SelectItem value="gbp">GBP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

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

                  {renderPaymentInput()}

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
