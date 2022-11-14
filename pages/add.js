import React from "react";
import { useState, useEffect, useRef } from "react";

export default function add() {

    const enWord = useRef();
    const frWord = useRef();

    const handleSubmit = e => {
        e.preventDefault();

        const newWord = {
            en: enWord.current.value,
            fr: frWord.current.value,
        }

        fetch('/api/vocapi', {
            method: 'POST',
            body: JSON.stringify(newWord),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        enWord.current.value = "";
        frWord.current.value = "";
    }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mt-5">
        <div className="mb-5 flex flex-col items-center justify-center w-full">
          <label className="w-3/4 mb-2" htmlFor="addEn">
            Ajouter un mot en anglais :
          </label>
          <input ref={enWord} className="w-3/4 rounded-md p-2" type="text" id="addEn" />
        </div>
        <div className=" flex flex-col items-center justify-center w-full">
          <label className="w-3/4 mb-2" htmlFor="addFr">
            Ajouter un mot en français :
          </label>
          <input ref={frWord} className="w-3/4 rounded-md p-2" type="text" id="addFr" />
        </div>
        <button className="mt-5 bg-white border-white border-4 rounded-md text-black px-3 py-2 hover:border-4 hover:border-orange-600 hover:text-orange-600">
          Ajouter un mot
        </button>
      </form>
    </div>
  );
}
