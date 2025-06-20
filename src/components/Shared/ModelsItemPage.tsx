import React from 'react';
import {ModelPricing} from '../Interfaces/ModelPricing';

export default function ModelsItemPage(props: ModelPricing) {
  return (
    <a
      className="block glass border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all"
      href={props.link}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-black">{props.name}</h3>
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-500">{props.aiName}</p>
            <span className="text-xs text-gray-500">•</span>
            <p className="text-xs text-gray-500">{props.date}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-xs bg-gray-300 px-2 py-1 rounded text-black">{props.inputPrix} sats/token input</span>
            <span className="text-xs bg-gray-300 px-2 py-1 rounded text-black">
              {props.outputPrix} sats/token output
            </span>
            <span className="text-xs px-2 py-1 rounded bg-gray-300 text-black">{props.tokens} tokens</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">View details</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
          </svg>
        </div>
      </div>
    </a>
  );
}
