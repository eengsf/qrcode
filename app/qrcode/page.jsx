import { QRCodeSVG } from "qrcode.react";

export default function Page() {
  return (
    <div className="flex items-center justify-center m-auto mt-20">
      <QRCodeSVG value={`${process.env.NEXT_PUBLIC_URL}/counter`} />
    </div>
  );
}
