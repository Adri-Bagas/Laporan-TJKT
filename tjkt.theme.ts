import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const TJKTTheme: CustomThemeConfig = {
    name: 'tjkt-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "0px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #9dafa2 
		"--color-primary-50": "240 243 241", // #f0f3f1
		"--color-primary-100": "235 239 236", // #ebefec
		"--color-primary-200": "231 235 232", // #e7ebe8
		"--color-primary-300": "216 223 218", // #d8dfda
		"--color-primary-400": "186 199 190", // #bac7be
		"--color-primary-500": "157 175 162", // #9dafa2
		"--color-primary-600": "141 158 146", // #8d9e92
		"--color-primary-700": "118 131 122", // #76837a
		"--color-primary-800": "94 105 97", // #5e6961
		"--color-primary-900": "77 86 79", // #4d564f
		// secondary | #e4501d 
		"--color-secondary-50": "251 229 221", // #fbe5dd
		"--color-secondary-100": "250 220 210", // #fadcd2
		"--color-secondary-200": "248 211 199", // #f8d3c7
		"--color-secondary-300": "244 185 165", // #f4b9a5
		"--color-secondary-400": "236 133 97", // #ec8561
		"--color-secondary-500": "228 80 29", // #e4501d
		"--color-secondary-600": "205 72 26", // #cd481a
		"--color-secondary-700": "171 60 22", // #ab3c16
		"--color-secondary-800": "137 48 17", // #893011
		"--color-secondary-900": "112 39 14", // #70270e
		// tertiary | #9b8e57 
		"--color-tertiary-50": "240 238 230", // #f0eee6
		"--color-tertiary-100": "235 232 221", // #ebe8dd
		"--color-tertiary-200": "230 227 213", // #e6e3d5
		"--color-tertiary-300": "215 210 188", // #d7d2bc
		"--color-tertiary-400": "185 176 137", // #b9b089
		"--color-tertiary-500": "155 142 87", // #9b8e57
		"--color-tertiary-600": "140 128 78", // #8c804e
		"--color-tertiary-700": "116 107 65", // #746b41
		"--color-tertiary-800": "93 85 52", // #5d5534
		"--color-tertiary-900": "76 70 43", // #4c462b
		// success | #1ae15c 
		"--color-success-50": "221 251 231", // #ddfbe7
		"--color-success-100": "209 249 222", // #d1f9de
		"--color-success-200": "198 248 214", // #c6f8d6
		"--color-success-300": "163 243 190", // #a3f3be
		"--color-success-400": "95 234 141", // #5fea8d
		"--color-success-500": "26 225 92", // #1ae15c
		"--color-success-600": "23 203 83", // #17cb53
		"--color-success-700": "20 169 69", // #14a945
		"--color-success-800": "16 135 55", // #108737
		"--color-success-900": "13 110 45", // #0d6e2d
		// warning | #f75fe6 
		"--color-warning-50": "254 231 251", // #fee7fb
		"--color-warning-100": "253 223 250", // #fddffa
		"--color-warning-200": "253 215 249", // #fdd7f9
		"--color-warning-300": "252 191 245", // #fcbff5
		"--color-warning-400": "249 143 238", // #f98fee
		"--color-warning-500": "247 95 230", // #f75fe6
		"--color-warning-600": "222 86 207", // #de56cf
		"--color-warning-700": "185 71 173", // #b947ad
		"--color-warning-800": "148 57 138", // #94398a
		"--color-warning-900": "121 47 113", // #792f71
		// error | #dfe869 
		"--color-error-50": "250 252 233", // #fafce9
		"--color-error-100": "249 250 225", // #f9fae1
		"--color-error-200": "247 249 218", // #f7f9da
		"--color-error-300": "242 246 195", // #f2f6c3
		"--color-error-400": "233 239 150", // #e9ef96
		"--color-error-500": "223 232 105", // #dfe869
		"--color-error-600": "201 209 95", // #c9d15f
		"--color-error-700": "167 174 79", // #a7ae4f
		"--color-error-800": "134 139 63", // #868b3f
		"--color-error-900": "109 114 51", // #6d7233
		// surface | #c3b592 
		"--color-surface-50": "246 244 239", // #f6f4ef
		"--color-surface-100": "243 240 233", // #f3f0e9
		"--color-surface-200": "240 237 228", // #f0ede4
		"--color-surface-300": "231 225 211", // #e7e1d3
		"--color-surface-400": "213 203 179", // #d5cbb3
		"--color-surface-500": "195 181 146", // #c3b592
		"--color-surface-600": "176 163 131", // #b0a383
		"--color-surface-700": "146 136 110", // #92886e
		"--color-surface-800": "117 109 88", // #756d58
		"--color-surface-900": "96 89 72", // #605948
		
	}
}