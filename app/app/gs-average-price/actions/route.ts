'use server';

import {
  AvgPrice,
  ZyteArgs,
  ZyteConfig,
  ZyteRes,
  productList,
} from '@/entities/zyte';
import { Zyte } from '@/services/zyte-api-client';
import { NextRequest, NextResponse } from 'next/server';

const apiClient = new Zyte('/v1/extract');

async function zyte({ keyword, countryCode }: ZyteArgs) {
  return await apiClient
    .post({
      url: `https://www.google.com/search?tbm=shop&hl=en&psb=1&q=${keyword}&oq=${keyword}&sclient=products-cc`,
      productList: true,
      geolocation: countryCode,
      actions: [
        {
          action: 'click',
          selector: {
            value:
              '.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.XWZjwc',
            type: 'css',
          },
        },
      ],
    } as ZyteConfig)
    .then((res) => {
      const prices: number[] = [];
      res.productList.products?.map(
        (product: productList) =>
          !isNaN(parseInt(product.price)) &&
          prices.push(parseInt(product.price))
      );

      return {
        keyword: keyword.replaceAll('+', ' '),
        prices,
      };
    })
    .catch((err) => {
      const { title, status } = err.response.data;

      return {
        keyword: keyword.replaceAll('+', ' '),
        prices: { message: title, status: status },
      };
    });
}

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json(
    {
      message: "You've hit a dead end, nothing to see here!",
    },
    { status: 400 }
  );
}

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  if (body) {
    const formData = await JSON.parse(body.data);
    if (formData.keyword) {
      const avgPrice: AvgPrice[] = [];

      const { keyword, prices } = (await zyte({
        keyword: formData.keyword,
        countryCode: formData.countryCode,
      })) as ZyteRes;

      if (prices?.status) {
        avgPrice.push({
          keyword,
          currency: formData.currency,
          avgPrice: 0,
          error: prices.message,
        });
        return NextResponse.json(JSON.stringify(avgPrice));
      }

      avgPrice.push({
        keyword,
        currency: formData.currency,
        avgPrice: Math.floor(
          prices
            .map((price: number) => price)
            .reduce((prev: number, curr: number) => {
              return prev + curr;
            }, 0) / prices.length
        ),
      });

      return NextResponse.json(JSON.stringify(avgPrice), { status: 200 });
    }
    return NextResponse.json(
      {
        message: "You've hit a dead end, nothing to see here!",
      },
      { status: 400 }
    );
  }
  return NextResponse.json(
    {
      message: "You've hit a dead end, nothing to see here!",
    },
    { status: 400 }
  );
}