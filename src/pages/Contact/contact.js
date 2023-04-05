
import React from "react";
import { BsChevronDown, BsTelephoneOutbound, BsEnvelopeCheck, BsSignpost2 } from "react-icons/bs";
import { SlSocialFacebook, SlSocialTwitter, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { Switch } from '@headlessui/react'
import './contact.css';


export const ContactPage = () => {


  return (
    <div class=" my-24 mx-auto">
      <section class="mb-32 text-gray-800">
        <div class="contact-container relative overflow-hidden bg-no-repeat bg-cover shadow-lg">
        </div>
        <div class="container text-gray-800 px-4 md:px-12 mx-auto rounded-xl">
          <div class=" container-two block rounded-3xl shadow-lg py-10 md:py-12 px-2 md:px-6">
            <div className="mx-auto max-w-2xl text-center mb-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">İletişime Geç</h2>
              <p className="mt-2 text-lg leading-8 text-black">
                Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz.
              </p>
            </div>
            <div class="flex flex-wrap">
              <div class="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
                <form>
                  <div class="form-group mb-6">
                    <span className="font-bold text-gray text-lg pb-2">Ad ve Soyad : </span>
                    <input type="text" class="form-control block
                    w-full
                    px-3
                    py-3
                    text-xs
                    font-normal
                    italic
                    text-gray-300
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-300 focus:bg-white focus:border-orange-600 focus:outline-none" id="exampleInput7"
                      placeholder="Adınızı giriniz" />
                  </div>
                  <div class="form-group mb-6">
                  <span className="font-bold text-gray text-lg pb-2">E-posta : </span>
                    <input type="email" class="form-control block
                    w-full
                    px-3
                    py-3
                    text-xs
                    font-normal
                    italic
                    text-gray-300
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-300 focus:bg-white focus:border-orange-600 focus:outline-none" id="exampleInput8"
                      placeholder="E-posta adresinizi giriniz" />
                  </div>
                  <div class="form-group mb-6">
                  <span className="font-bold text-gray text-lg pb-2">Mesajınız : </span>
                    <textarea class="
                    w-full
                    px-3
                    py-3
                    text-xs
                    font-normal
                    italic
                    text-gray-300
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-300 focus:bg-white focus:border-orange-600 focus:outline-none" id="exampleInput13"
                    rows="3" placeholder="Mesajınızı Yazınız.."></textarea>
                  </div>
                  <div class="form-group form-check text-center mb-6">
                    <input type="checkbox"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#f97316] checked:border-orange-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                      id="exampleCheck87" />
                    <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">Bana mesajın bir kopyasını gönderin.</label>
                  </div>
                  <button type="submit" class="
                  w-full
                  px-6
                  py-2.5
                  bg-[#f97316]
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-orange-700 hover:shadow-lg
                  focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-orange-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out">Send</button>
                </form>
              </div>
              <div class="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                <div class="flex flex-wrap">
                  <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div class="flex items-start">
                      <div class="shrink-0">
                        <div class="p-4 bg-[#f97316] rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <BsTelephoneOutbound
                          style={{color:"white"}}/>
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p class="font-bold mb-1">Telefon</p>
                        <p class="text-gray-500">+90 212 482 97 57</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div class="flex items-start">
                      <div class="shrink-0">
                        <div class="p-4 bg-[#f97316] rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <BsEnvelopeCheck
                        style={{color:"white"}}/>
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p class="font-bold mb-1">E-Posta</p>
                        <p class="text-gray-500">info@engintasarim.com</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-12 md:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div class="flex align-start">
                      <div class="shrink-0">
                        <div class="p-4 bg-[#f97316] rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <BsSignpost2
                        style={{color:"white"}}/>
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p class="font-bold mb-1">Adres</p>
                        <p class="text-gray-500">Şenlikköy Mah. Germeyan Sok. No:21/3 Florya / Bakırköy - İstanbul</p>
                      </div>
                    </div>
                  </div>
                  {/* <div class="grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div class="flex align-start">
                      <div class="shrink-0">
                        <div class="p-4 bg-[#f97316] rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <BsSignpost2
                          style={{color:"white"}}/>
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p class="font-bold mb-1">Bug report</p>
                        <p class="text-gray-500">bugs@example.com</p>
                        <p class="text-gray-500">+1 234-567-89</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  )
}