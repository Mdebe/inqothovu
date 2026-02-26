"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function DownloadAppPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-purple-100 px-6">
        <Navbar />
      <div className="max-w-xl text-center bg-white p-10 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-bold text-[#010a33] mb-4">
          Download Our App
        </h1>
        <p className="text-gray-700 mb-8">
          Get the best experience of our services directly on your mobile device. 
          Available for Android and iOS.
        </p>

        {/* App Download Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          {/* Android / Samsung / Huawei */}
          <a
            href="https://example.com/android-download.apk" // Replace with actual APK link or store link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-600 text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-green-700 transition"
          >
            Download for Android
          </a>

          {/* iOS / TestFlight */}
          <a
            href="https://example.com/ios-download" // Replace with App Store/TestFlight link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-blue-600 text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Download for iOS
          </a>
        </div>

        <p className="text-gray-500 mt-6 text-sm">
          Make sure to allow app installations from unknown sources for Android.
        </p>
      </div>
      
      <Footer />
    </section>
    
  );
}