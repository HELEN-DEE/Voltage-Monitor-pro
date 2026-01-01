export default function Waveform({ isDarkMode }: { isDarkMode: boolean }) {
    const stroke = isDarkMode
    ? 'rgba(37, 99, 235, 0.25)'
    : 'rgba(37, 99, 235, 0.18)';

    return (
        <svg
        viewBox="0 0 1200 200"
        className="absolute inset-x-0  w-full pointer-events-none"
        aria-hidden="true"
        >
        <path
            d="
            M0 100
            C100 60, 200 140, 300 100
            C400 60, 500 140, 600 100
            C700 60, 800 140, 900 100
            C1000 60, 1100 140, 1200 100
            "
            fill="none"
            stroke={stroke}
            strokeWidth="2"
        />
        </svg>
    );
}
